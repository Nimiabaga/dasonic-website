"use client";

import { FormEvent, useState } from 'react';
import Link from 'next/link';

const exploreLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Our Projects' },
  { href: '/contact', label: 'Contact' },
];

export function SiteFooter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({
    type: 'idle',
    message: '',
  });

  async function handleNewsletterSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim()) {
      setFeedback({ type: 'error', message: 'Please enter your email address.' });
      return;
    }

    setIsSubmitting(true);
    setFeedback({ type: 'idle', message: '' });

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || 'Subscription failed. Please try again.');
      }

      setFeedback({ type: 'success', message: data.message || 'Subscription successful.' });
      setEmail('');
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to submit right now. Please try again.';
      setFeedback({ type: 'error', message });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <footer className="border-t border-[color:var(--line)] bg-[color:var(--dark-blue)] text-white">
      <div className="container-padded py-14 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.8fr_1.25fr] lg:gap-12">
          <div>
            <p className="font-display text-2xl font-bold uppercase tracking-[0.02em] text-white md:text-3xl">Dasonic and Company (Nigeria) Ltd</p>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/85">
              We specialize in engineering, infrastructure, facility maintenance, procurement, and project execution
              services with strong safety, quality, and compliance standards.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Explore</p>
            <ul className="mt-5 space-y-3">
              {exploreLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-base text-white/85 no-underline transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Newsletter</p>
            <div className="mt-5 rounded-2xl bg-[color:var(--sea)] p-6">
              <p className="text-base leading-relaxed text-white/90">Subscribe to receive our latest project updates and insights.</p>
              <form className="mt-5 flex flex-col gap-3 sm:flex-row" onSubmit={handleNewsletterSubmit} noValidate>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email address"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="h-12 flex-1 rounded-md border border-transparent px-4 text-sm text-[color:var(--ink)] outline-none ring-0"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-12 rounded-md bg-white px-6 text-sm font-semibold uppercase tracking-[0.08em] text-[color:var(--sea)] transition hover:bg-white/90"
                >
                  {isSubmitting ? 'Submitting...' : 'Register'}
                </button>
              </form>
              {feedback.type !== 'idle' ? (
                <p className={`mt-3 text-sm ${feedback.type === 'success' ? 'text-white' : 'text-red-200'}`}>
                  {feedback.message}
                </p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 border-t border-white/15 pt-8 md:grid-cols-2">
          <div className="space-y-2 text-sm leading-relaxed text-white/80">
            <p>+234 803 733 7547</p>
            <p>dasonicandcoy@yahoo.com</p>
            <p>33, Mission Road, Bonny, Rivers State, Nigeria.</p>
          </div>
          <div className="text-sm text-white/70 md:text-right">© {new Date().getFullYear()} Dasonic and Company Nigeria Ltd</div>
        </div>
      </div>
    </footer>
  );
}
