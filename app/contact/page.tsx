import { PageShell } from '@/components/page-shell';

export const metadata = {
  title: 'Contact',
};

export default function ContactPage() {
  return (
    <>
      <section className="relative h-80 overflow-hidden md:h-96">
        <img src="/profile-page-066.png" alt="Contact" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--dark-blue)] via-[color:var(--dark-blue)]/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-padded">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">Contact</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl max-w-3xl">
              Let's build excellence together
            </h1>
          </div>
        </div>
      </section>
      <PageShell
        title="Get in touch"
        subtitle="Partner with Nigeria's leading engineering and construction experts."
      >
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-[color:var(--line)] bg-white p-8 shadow-sm">
          <div className="accent-bar h-1.5 w-16 rounded-full mb-6" />
          <p className="text-xl font-bold mb-6">Company details</p>
          <dl className="space-y-4 text-base text-[color:var(--muted)]">
            <div className="flex items-start justify-between gap-4">
              <dt className="font-semibold text-[color:var(--ink)]">Email</dt>
              <dd className="text-right">dasonicandcoy@yahoo.com</dd>
            </div>
            <div className="flex items-start justify-between gap-4">
              <dt className="font-semibold text-[color:var(--ink)]">Phone</dt>
              <dd className="text-right">+234 803 733 7547</dd>
            </div>
            <div className="flex items-start justify-between gap-4">
              <dt className="font-semibold text-[color:var(--ink)]">Address</dt>
              <dd className="text-right">33, Mission Road, Bonny, Rivers State, Nigeria.</dd>
            </div>
            <div className="flex items-start justify-between gap-4">
              <dt className="font-semibold text-[color:var(--ink)]">Website</dt>
              <dd className="text-right">www.dasonicandcompany.com</dd>
            </div>
          </dl>

          <div className="mt-8 rounded-xl bg-gradient-to-br from-[color:var(--sea)] to-[color:var(--accent-blue)] p-6 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.25em]">Quick action</p>
            <p className="mt-3 text-sm text-white/90 leading-relaxed">
              Send a project enquiry and our team will respond with next steps and timelines.
            </p>
            <a
              className="mt-5 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-[color:var(--dark-blue)] no-underline transition hover:bg-white/90"
              href="mailto:dasonicandcoy@yahoo.com?subject=Project%20Enquiry"
            >
              Email Enquiry
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-[color:var(--line)] bg-white p-8 shadow-sm">
          <div className="accent-bar h-1.5 w-16 rounded-full mb-6" />
          <p className="text-xl font-bold">Working with Dasonic</p>
          <p className="mt-4 text-base text-[color:var(--muted)] leading-relaxed">
            We support infrastructure and engineering projects across Nigeria and beyond. Share your scope, and we will
            provide a tailored approach covering safety planning, timelines, and procurement strategy.
          </p>
          <div className="mt-8 space-y-4 text-base text-[color:var(--muted)]">
            <p>
              <strong className="text-[color:var(--ink)] font-semibold">Consultation:</strong> Technical assessment and scope review.
            </p>
            <p>
              <strong className="text-[color:var(--ink)] font-semibold">Execution:</strong> Experienced teams with quality control and
              compliance.
            </p>
            <p>
              <strong className="text-[color:var(--ink)] font-semibold">Support:</strong> Ongoing reporting, monitoring, and handover.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-4">
            <a
              className="rounded-full border-2 border-[color:var(--sea)] px-6 py-3 text-center text-base font-semibold text-[color:var(--sea)] no-underline transition hover:bg-[color:var(--sea)] hover:text-white"
              href="tel:+2348037337547"
            >
              Call +234 803 733 7547
            </a>
            <a
              className="rounded-full border-2 border-[color:var(--line)] px-6 py-3 text-center text-base font-semibold text-[color:var(--ink)] no-underline transition hover:bg-[color:var(--cloud)]"
              href="https://www.dasonicandcompany.com"
              target="_blank"
              rel="noreferrer"
            >
              Visit Company Website
            </a>
          </div>
        </div>
      </div>
    </PageShell>
    </>
  );
}
