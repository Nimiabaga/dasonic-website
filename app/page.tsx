import Link from 'next/link';

const highlights = [
  {
    title: 'Premium delivery',
    body: 'Fast, reliable execution with attention to detail — from first briefing to handover.',
  },
  {
    title: 'Safety & compliance',
    body: 'Clear processes, documented standards, and a safety-first culture.',
  },
  {
    title: 'End-to-end support',
    body: 'Design, supply, installation, and maintenance — built for long-term performance.',
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-slate-50 to-white">
        <div className="container-padded py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-widest text-slate-600">DASONIC COMPANY</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              A modern website, ready for your official company content.
            </h1>
            <p className="mt-6 text-base text-slate-600 md:text-lg">
              This repo is the starter foundation: layout, navigation, pages, and styling. Next step: we pull the exact
              copy, services, and branding from your company profile and wire up a proper contact form.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/services"
                className="rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white no-underline hover:bg-slate-800"
              >
                View services
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-900 no-underline hover:bg-slate-50"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:mt-16 md:grid-cols-3">
            {highlights.map((h) => (
              <div key={h.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold">{h.title}</p>
                <p className="mt-2 text-sm text-slate-600">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-padded py-14">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Add the official company profile</h2>
              <p className="mt-3 text-sm text-slate-600 md:text-base">
                The images you uploaded are placed in{' '}
                <code className="rounded bg-slate-100 px-2 py-1 text-xs">public/company-profile</code>. Next, we can
                extract the copy and convert it into clean sections.
              </p>
            </div>
            <Link
              href="/projects"
              className="w-full rounded-full bg-slate-900 px-6 py-3 text-center text-sm font-medium text-white no-underline hover:bg-slate-800 md:w-auto"
            >
              See projects layout
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
