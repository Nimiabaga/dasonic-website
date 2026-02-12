import { PageShell } from '@/components/page-shell';

export const metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (
    <PageShell
      title="About Dasonic"
      subtitle="Replace this section with the official overview/mission/vision from the company profile."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 p-6">
          <p className="text-sm font-semibold">Who we are</p>
          <p className="mt-2 text-sm text-slate-600">
            Short company summary goes here. Keep it tight, credible, and outcome-focused.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 p-6">
          <p className="text-sm font-semibold">What we stand for</p>
          <p className="mt-2 text-sm text-slate-600">
            Values, standards, and what makes you different — pulled directly from the profile deck.
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-slate-200 p-6">
        <p className="text-sm font-semibold">Company profile assets</p>
        <p className="mt-2 text-sm text-slate-600">
          Uploaded profile pages are available as images in <code className="rounded bg-slate-100 px-2 py-1 text-xs">public/company-profile</code>.
          We can convert them into website-ready text + sections.
        </p>
      </div>
    </PageShell>
  );
}
