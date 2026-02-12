import Link from 'next/link';
import { PageShell } from '@/components/page-shell';

export const metadata = {
  title: 'Services',
};

const services = [
  {
    name: 'Service name 1',
    desc: 'One-liner describing the service and the outcome.',
  },
  {
    name: 'Service name 2',
    desc: 'One-liner describing the service and the outcome.',
  },
  {
    name: 'Service name 3',
    desc: 'One-liner describing the service and the outcome.',
  },
];

export default function ServicesPage() {
  return (
    <PageShell
      title="Services"
      subtitle="Swap these placeholders with the exact list of services from your company profile."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {services.map((s) => (
          <div key={s.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold">{s.name}</p>
            <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <p className="text-sm font-semibold">Want a quote?</p>
        <p className="mt-2 text-sm text-slate-600">
          Add contact details and a proper enquiry form (email + WhatsApp) for faster conversions.
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-block rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white no-underline hover:bg-slate-800"
        >
          Contact
        </Link>
      </div>
    </PageShell>
  );
}
