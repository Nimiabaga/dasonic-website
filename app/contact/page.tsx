import { PageShell } from '@/components/page-shell';
import Image from 'next/image';

export const metadata = {
  title: 'Contact Us',
};

export default function ContactPage() {
  return (
    <>
      <section className="relative h-80 overflow-hidden md:h-96">
        <Image src="/profile-page-066.png" alt="Contact" className="h-full w-full object-cover" width={1920} height={1080} />
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
        title="Contact our team"
        subtitle="Connect with Dasonic for project enquiries, technical consultations, and partnership discussions."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-[color:var(--line)] bg-white p-5 shadow-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--sea)] font-semibold">Email</p>
            <p className="mt-2 text-sm font-semibold text-[color:var(--ink)] break-all">info@dasonicandcompany.com</p>
            <p className="mt-1 text-sm font-semibold text-[color:var(--ink)] break-all">dasonicandcoy@yahoo.com</p>
          </div>
          <div className="rounded-xl border border-[color:var(--line)] bg-white p-5 shadow-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--sea)] font-semibold">Phone</p>
            <p className="mt-2 text-sm font-semibold text-[color:var(--ink)]">+234 803 733 7547</p>
          </div>
          <div className="rounded-xl border border-[color:var(--line)] bg-white p-5 shadow-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--sea)] font-semibold">Location</p>
            <p className="mt-2 text-sm font-semibold text-[color:var(--ink)]">Bonny &amp; Port Harcourt, Rivers State, Nigeria</p>
          </div>
          <div className="rounded-xl border border-[color:var(--line)] bg-white p-5 shadow-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--sea)] font-semibold">Website</p>
            <p className="mt-2 text-sm font-semibold text-[color:var(--ink)]">www.dasonicandcompany.com</p>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <section className="rounded-2xl border border-[color:var(--line)] bg-white p-8 shadow-sm">
            <div className="accent-bar h-1.5 w-16 rounded-full mb-6" />
            <h2 className="text-2xl font-bold text-[color:var(--ink)]">Project Enquiries</h2>
            <p className="mt-4 text-base text-[color:var(--muted)] leading-relaxed">
              Share your project scope, timeline, and location. Our team will review your requirements and respond with
              a clear next-step plan aligned to your operational priorities.
            </p>
            <div className="mt-6 rounded-xl border border-[color:var(--line)] bg-[color:var(--cloud)] p-5">
              <p className="text-sm font-semibold text-[color:var(--ink)]">What to include in your enquiry:</p>
              <ul className="mt-3 space-y-2 text-sm text-[color:var(--muted)]">
                <li>• Project type and service required</li>
                <li>• Preferred timeline and site location</li>
                <li>• Any compliance, safety, or technical constraints</li>
              </ul>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="rounded-full bg-[color:var(--sea)] px-6 py-3 text-sm font-semibold text-white no-underline transition hover:bg-[color:var(--accent-blue)]"
                href="mailto:info@dasonicandcompany.com?cc=dasonicandcoy@yahoo.com&subject=Project%20Enquiry"
              >
                Send Email Enquiry
              </a>
              <a
                className="rounded-full border-2 border-[color:var(--sea)] px-6 py-3 text-sm font-semibold text-[color:var(--sea)] no-underline transition hover:bg-[color:var(--sea)] hover:text-white"
                href="tel:+2348037337547"
              >
                Call +234 803 733 7547
              </a>
            </div>
          </section>

          <section className="rounded-2xl bg-gradient-to-br from-[color:var(--dark-blue)] to-[color:var(--navy)] p-8 text-white shadow-xl">
            <div className="bg-white/20 h-1.5 w-16 rounded-full mb-6" />
            <h2 className="text-2xl font-bold">Office Information</h2>
            <p className="mt-5 text-sm uppercase tracking-[0.2em] text-white/70">Address</p>
            <p className="mt-2 text-base text-white/95 leading-relaxed">33, Mission Road, Bonny, Rivers State, Nigeria.</p>
            <p className="mt-2 text-base text-white/95 leading-relaxed">No. 67 Tombia Extension Road, GRA Phase II, Port Harcourt.</p>

            <p className="mt-6 text-sm uppercase tracking-[0.2em] text-white/70">Business Contact</p>
            <p className="mt-2 text-base text-white/95">info@dasonicandcompany.com</p>
            <p className="mt-1 text-base text-white/95">dasonicandcoy@yahoo.com</p>
            <p className="mt-1 text-base text-white/95">+234 803 733 7547</p>

          </section>
        </div>
      </PageShell>
    </>
  );
}
