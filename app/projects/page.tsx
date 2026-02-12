import { PageShell } from '@/components/page-shell';

export const metadata = {
  title: 'Projects',
};

const projects = [
  {
    title: 'Project name',
    meta: 'Location • Year',
    body: 'Two lines about scope + results. Keep it factual.',
  },
  {
    title: 'Project name',
    meta: 'Location • Year',
    body: 'Two lines about scope + results. Keep it factual.',
  },
  {
    title: 'Project name',
    meta: 'Location • Year',
    body: 'Two lines about scope + results. Keep it factual.',
  },
];

export default function ProjectsPage() {
  return (
    <PageShell
      title="Projects"
      subtitle="This is a clean, premium projects layout. Replace with your real project list from the profile."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p, idx) => (
          <article key={`${p.title}-${idx}`} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-base font-semibold">{p.title}</h3>
              <span className="text-xs text-slate-500">{p.meta}</span>
            </div>
            <p className="mt-3 text-sm text-slate-600">{p.body}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
