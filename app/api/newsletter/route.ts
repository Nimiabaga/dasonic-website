import { NextResponse } from 'next/server';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const localSubscribers = new Set<string>();

function parseEmail(value: unknown): string {
  if (typeof value !== 'string') {
    return '';
  }

  return value.trim().toLowerCase();
}

function getMailchimpConfig() {
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
  const configuredServerPrefix = process.env.MAILCHIMP_SERVER_PREFIX;

  if (!apiKey || !audienceId) {
    return null;
  }

  const inferredServerPrefix = apiKey.includes('-') ? apiKey.split('-').pop() : '';
  const serverPrefix = configuredServerPrefix || inferredServerPrefix;

  if (!serverPrefix) {
    return null;
  }

  return {
    apiKey,
    audienceId,
    serverPrefix,
  };
}

async function subscribeWithMailchimp(email: string) {
  const config = getMailchimpConfig();

  if (!config) {
    return { handled: false as const };
  }

  const endpoint = `https://${config.serverPrefix}.api.mailchimp.com/3.0/lists/${config.audienceId}/members`;
  const authToken = Buffer.from(`anystring:${config.apiKey}`).toString('base64');

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${authToken}`,
    },
    body: JSON.stringify({
      email_address: email,
      status: 'subscribed',
      tags: ['Website'],
    }),
  });

  if (response.ok) {
    return { handled: true as const, status: 200 as const, message: 'Thanks for subscribing. We will keep you updated.' };
  }

  const errorBody = (await response.json().catch(() => null)) as { title?: string; detail?: string } | null;
  const title = (errorBody?.title || '').toLowerCase();

  if (response.status === 400 && title.includes('member exists')) {
    return { handled: true as const, status: 200 as const, message: 'You are already subscribed.' };
  }

  return {
    handled: true as const,
    status: 502 as const,
    message: errorBody?.detail || 'Subscription could not be completed. Please try again.',
  };
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type') || '';

    let incomingEmail = '';

    if (contentType.includes('application/json')) {
      const body = (await request.json()) as { email?: unknown };
      incomingEmail = parseEmail(body.email);
    } else {
      const formData = await request.formData();
      incomingEmail = parseEmail(formData.get('email'));
    }

    if (!incomingEmail || !emailPattern.test(incomingEmail)) {
      return NextResponse.json({ message: 'Please enter a valid email address.' }, { status: 400 });
    }

    if (localSubscribers.has(incomingEmail)) {
      return NextResponse.json({ message: 'You are already subscribed.' }, { status: 200 });
    }

    const mailchimpResult = await subscribeWithMailchimp(incomingEmail);

    if (mailchimpResult.handled) {
      if (mailchimpResult.status === 200) {
        localSubscribers.add(incomingEmail);
      }

      return NextResponse.json({ message: mailchimpResult.message }, { status: mailchimpResult.status });
    }

    localSubscribers.add(incomingEmail);

    const webhookUrl = process.env.NEWSLETTER_WEBHOOK_URL;

    if (webhookUrl) {
      const webhookResponse = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: incomingEmail,
          source: 'website-footer',
          subscribedAt: new Date().toISOString(),
        }),
      });

      if (!webhookResponse.ok) {
        return NextResponse.json({ message: 'Subscription could not be completed. Please try again.' }, { status: 502 });
      }
    }

    return NextResponse.json({ message: 'Thanks for subscribing. We will keep you updated.' }, { status: 200 });
  } catch {
    return NextResponse.json({ message: 'Unable to process subscription at the moment.' }, { status: 500 });
  }
}
