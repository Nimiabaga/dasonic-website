import { PageShell } from '@/components/page-shell';

export const metadata = {
  title: 'Contact',
};

export default function ContactPage() {
  return (
    <PageShell
      title="Contact"
      subtitle="Add your official email, phone, address, and WhatsApp here."
    >
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 p-6">
          <p className="text-sm font-semibold">Company details</p>
          <dl className="mt-4 space-y-3 text-sm text-slate-600">
            <div className="flex items-start justify-between gap-4">
              <dt className="text-slate-500">Email</dt>
              <dd className="text-right">hello@dasonic.example</dd>
            </div>
            <div className="flex items-start justify-between gap-4">
              <dt className="text-slate-500">Phone</dt>
              <dd className="text-right">+234 000 000 0000</dd>
            </div>
            <div className="flex items-start justify-between gap-4">
              <dt className="text-slate-500">Location</dt>
              <dd className="text-right">Nigeria</dd>
            </div>
          </dl>

          <div className="mt-6 rounded-xl bg-slate-50 p-4">
            <p className="text-xs font-semibold text-slate-700">Quick action</p>
            <p className="mt-2 text-xs text-slate-600">
              For now, the enquiry button opens an email draft. Later we can add a real form with spam protection.
            </p>
            <a
              className="mt-3 inline-block rounded-full bg-slate-900 px-4 py-2 text-xs font-medium text-white no-underline hover:bg-slate-800"
              href="mailto:hello@dasonic.example?subject=Project%20Enquiry"
            >
              Email enquiry
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 p-6">
          <p className="text-sm font-semibold">Enquiry (placeholder)</p>
          <form className="mt-4 space-y-4">
            <label className="block">
              <span className="text-xs font-medium text-slate-700">Full name</span>
              <input
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-900"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="text-xs font-medium text-slate-700">Email</span>
              <input
                type="email"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-900"
                placeholder="you@email.com"
              />
            </label>
            <label className="block">
              <span className="text-xs font-medium text-slate-700">Message</span>
              <textarea
                rows={5}
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-900"
                placeholder="Tell us about your project..."
              />
            </label>
            <button
              type="button"
              className="w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white hover:bg-slate-800"
              onClick={() => alert('This is a placeholder. We will wire this to email/CRM in the next step.')}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </PageShell>
  );
}
