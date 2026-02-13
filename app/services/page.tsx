import Link from 'next/link';
import { PageShell } from '@/components/page-shell';

export const metadata = {
  title: 'Services',
};

const services = [
  {
    name: 'Custom fabrication and installation',
    desc: 'Fabrication, installation, and technical support for durable, high-performance systems.',
  },
  {
    name: 'Construction and project execution',
    desc: 'Planning, design, and execution of construction projects delivered on time and to specification.',
  },
  {
    name: 'Structural integrity and modeling',
    desc: 'Design, analysis, modeling, and advisory services to ensure safe, efficient infrastructure.',
  },
  {
    name: 'Environmental services',
    desc: 'Impact assessments, remediation, monitoring, and compliance-focused reporting.',
  },
  {
    name: 'Procurement and logistics',
    desc: 'Reliable sourcing and logistics coordination to keep complex projects running smoothly.',
  },
  {
    name: 'Facility management',
    desc: 'Operational oversight and maintenance services designed for long-term asset performance.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative h-80 overflow-hidden md:h-96">
        <img src="/profile-page-016.png" alt="Services" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--dark-blue)] via-[color:var(--dark-blue)]/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-padded">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">Services</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl max-w-3xl">
              Solutions that scale with your vision
            </h1>
          </div>
        </div>
      </section>
      <PageShell
        title="Integrated engineering excellence"
        subtitle="End-to-end engineering, infrastructure, and operational support built for safety, quality, and efficiency."
      >
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <div key={s.name} className="group rounded-2xl border border-[color:var(--line)] bg-white p-8 shadow-sm transition hover:shadow-xl hover:border-[color:var(--sea)]">
            <div className="accent-bar h-1.5 w-12 rounded-full mb-6" />
            <p className="text-lg font-bold">{s.name}</p>
            <p className="mt-4 text-base text-[color:var(--muted)] leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-[color:var(--line)] bg-white p-8 shadow-sm">
          <div className="accent-bar h-1.5 w-16 rounded-full mb-6" />
          <p className="text-xl font-bold">Delivery standards</p>
          <p className="mt-4 text-base text-[color:var(--muted)] leading-relaxed">
            We execute every project with documented processes, safety compliance, and quality control checks. Our
            teams combine local expertise with global best practices to deliver reliable results.
          </p>
        </div>
        <div className="rounded-2xl bg-gradient-to-br from-[color:var(--dark-blue)] to-[color:var(--navy)] p-8 text-white shadow-xl">
          <div className="bg-white/20 h-1.5 w-16 rounded-full mb-6" />
          <p className="text-xl font-bold">Ready to scope a project?</p>
          <p className="mt-4 text-base text-white/90 leading-relaxed">
            Share your brief and we will provide a clear plan, timeline, and delivery approach aligned to your
            requirements.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-white px-8 py-3 text-base font-semibold text-[color:var(--dark-blue)] no-underline transition hover:bg-white/90"
          >
            Contact the team
          </Link>
        </div>
      </div>
    </PageShell>
    </>
  );
}
