import { PageShell } from '@/components/page-shell';

export const metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (
    <>
      <section className="relative h-80 overflow-hidden md:h-96">
        <img src="/profile-page-033.png" alt="Leadership" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--dark-blue)] via-[color:var(--dark-blue)]/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-padded">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">About Us</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl max-w-3xl">
              Excellence is only the beginning
            </h1>
          </div>
        </div>
      </section>
      <PageShell
        title="Engineering solutions that improve lives sustainably"
        subtitle="A Nigerian engineering and infrastructure company committed to safety, innovation, and long-term value."
      >
        <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-[color:var(--line)] bg-white p-8 shadow-sm">
          <div className="accent-bar h-1.5 w-16 rounded-full mb-6" />
          <p className="text-lg font-bold">Company overview</p>
          <p className="mt-4 text-base text-[color:var(--muted)] leading-relaxed">
            <span className="text-4xl font-black text-[#003780]">D</span><span className="font-bold text-[#003780]">asonic & Company</span> Nigeria Ltd is a proudly indigenous company incorporated in 1997 under the Companies
            and Allied Matters Act. We provide engineering solutions and infrastructure services across the public and
            private sectors, with a reputation for quality, safety, and on-time delivery.
          </p>
        </div>
        <div className="rounded-2xl border border-[color:var(--line)] bg-white p-8 shadow-sm">
          <div className="accent-bar h-1.5 w-16 rounded-full mb-6" />
          <p className="text-lg font-bold">Core capabilities</p>
          <p className="mt-4 text-base text-[color:var(--muted)] leading-relaxed">
            Engineering and facility management, procurement and logistics, project construction and consultancy, and
            structural integrity and modeling services. We deliver measurable performance through technical excellence
            and clear project governance.
          </p>
        </div>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-[color:var(--line)] bg-white p-8 shadow-sm">
          <div className="accent-bar h-1.5 w-16 rounded-full mb-6" />
          <p className="text-lg font-bold">Vision</p>
          <p className="mt-4 text-base text-[color:var(--muted)] leading-relaxed">
            To be a nationally respected and globally trusted leader in engineering, infrastructure management,
            procurement, and technical services, driving innovation, sustainability, and quality solutions that support
            Nigeria&apos;s industrial growth.
          </p>
        </div>
        <div className="rounded-2xl border border-[color:var(--line)] bg-white p-8 shadow-sm">
          <div className="accent-bar h-1.5 w-16 rounded-full mb-6" />
          <p className="text-lg font-bold">Mission</p>
          <p className="mt-4 text-base text-[color:var(--muted)] leading-relaxed">
            To deliver cost-effective, reliable, and safe engineering solutions with a strong focus on procurement,
            facility management, and environmental services, while developing local content and promoting operational
            excellence.
          </p>
        </div>
      </div>

      <div className="mt-12 rounded-2xl border border-[color:var(--line)] bg-white p-8 shadow-sm">
        <div className="accent-bar h-1.5 w-16 rounded-full mb-6" />
        <p className="text-xl font-bold mb-6">Core values</p>
        <div className="grid gap-4 text-base md:grid-cols-3">
          <div className="rounded-xl bg-gradient-to-br from-[color:var(--sea)] to-[color:var(--accent-blue)] p-6 text-center font-semibold text-white shadow-md">Integrity</div>
          <div className="rounded-xl bg-gradient-to-br from-[color:var(--sea)] to-[color:var(--accent-blue)] p-6 text-center font-semibold text-white shadow-md">Safety first</div>
          <div className="rounded-xl bg-gradient-to-br from-[color:var(--sea)] to-[color:var(--accent-blue)] p-6 text-center font-semibold text-white shadow-md">Quality delivery</div>
          <div className="rounded-xl bg-gradient-to-br from-[color:var(--sea)] to-[color:var(--accent-blue)] p-6 text-center font-semibold text-white shadow-md">Innovation</div>
          <div className="rounded-xl bg-gradient-to-br from-[color:var(--sea)] to-[color:var(--accent-blue)] p-6 text-center font-semibold text-white shadow-md">Sustainability</div>
          <div className="rounded-xl bg-gradient-to-br from-[color:var(--sea)] to-[color:var(--accent-blue)] p-6 text-center font-semibold text-white shadow-md">Local content</div>
        </div>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-[color:var(--line)] bg-white p-8 shadow-sm">
          <div className="accent-bar h-1.5 w-16 rounded-full mb-6" />
          <p className="text-lg font-bold">HSE policy</p>
          <p className="mt-4 text-base text-[color:var(--muted)] leading-relaxed">
            We maintain a safe and healthy work environment for employees, contractors, and stakeholders through
            stringent safety standards, regulatory compliance, and proactive risk management. Continuous training and
            accountability are central to our operations.
          </p>
        </div>
        <div className="rounded-2xl border border-[color:var(--line)] bg-white p-8 shadow-sm">
          <div className="accent-bar h-1.5 w-16 rounded-full mb-6" />
          <p className="text-lg font-bold">Quality and operational policy</p>
          <p className="mt-4 text-base text-[color:var(--muted)] leading-relaxed">
            We deliver consistent, high-quality services by applying best practices, monitoring performance, and
            optimizing processes to meet client specifications and regulatory requirements.
          </p>
        </div>
      </div>

      <div className="mt-12 rounded-2xl bg-gradient-to-br from-[color:var(--dark-blue)] to-[color:var(--navy)] p-10 text-white shadow-xl">
        <div className="bg-white/20 h-1.5 w-16 rounded-full mb-6" />
        <p className="text-xl font-bold mb-4">Local content commitment</p>
        <p className="text-base leading-relaxed text-white/90">
          In alignment with the Nigerian Local Content Act, we maximize the use of Nigerian human resources,
          materials, equipment, and services across our operations. Our longstanding relationship with the Nigerian
          Content Development and Monitoring Board supports sustainable growth and local industry development.
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-8">Leadership</h3>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-[color:var(--line)] bg-white p-8 shadow-sm">
            <p className="text-xl font-bold">Dagogo Ernest Ibiama</p>
            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[color:var(--sea)] font-semibold">Chairman and Managing Director</p>
            <p className="mt-6 text-base text-[color:var(--muted)] leading-relaxed">
              Qualified Barrister with over a decade of industry leadership, delivering key projects for Shell, NNPC,
              Total, and NLNG. Focused on safety, transparency, and client satisfaction.
            </p>
          </div>
          <div className="rounded-2xl border border-[color:var(--line)] bg-white p-8 shadow-sm">
            <p className="text-xl font-bold">Boma Precious Kalama</p>
            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[color:var(--sea)] font-semibold">HR Officer</p>
            <p className="mt-6 text-base text-[color:var(--muted)] leading-relaxed">
              Leads talent development, employee well-being, and performance management, ensuring a positive and
              productive work culture across the company.
            </p>
          </div>
        </div>
      </div>
    </PageShell>
    </>
  );
}
