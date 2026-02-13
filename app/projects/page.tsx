import { PageShell } from '@/components/page-shell';

export const metadata = {
  title: 'Projects',
};

const projects = [
  {
    title: 'Road construction in Onelga, Rivers State',
    meta: 'Infrastructure and waste management',
    scope: [
      'Site waste audit and segregation plan.',
      'Licensed treatment and disposal of materials.',
      'Hazardous waste handling and reporting to specification.',
    ],
  },
  {
    title: 'Cellar slab raft foundation for oil rig drilling platform',
    meta: 'Foundation works',
    scope: [
      'Site preparation and excavation to required depth.',
      'Raft foundation design and construction.',
      'Reinforcement, concrete works, and safety compliance.',
    ],
  },
  {
    title: 'Concrete paving for heavy-duty vehicles and rig operations',
    meta: 'Industrial paving',
    scope: [
      'Subgrade stabilization and site preparation.',
      'High-strength concrete paving and reinforcement.',
      'Curing, quality control, and safety compliance.',
    ],
  },
  {
    title: 'CFA and steel pile driving works',
    meta: 'Deep foundation installation',
    scope: [
      'Continuous flight auger piling for load-bearing stability.',
      'Steel pile driving to engineering standards.',
      'Soil testing and quality control inspections.',
    ],
  },
  {
    title: 'Clearing operations and excavation of pit with swamp buggy excavator',
    meta: 'Site preparation',
    scope: [
      'Vegetation removal and site clearing.',
      'Excavation in soft ground using swamp buggy equipment.',
      'Material handling with environmental compliance.',
    ],
  },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="relative h-80 overflow-hidden md:h-96">
        <img src="/profile-page-052.png" alt="Projects" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--dark-blue)] via-[color:var(--dark-blue)]/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-padded">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">Projects</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl max-w-3xl">
              Our portfolio, in motion
            </h1>
          </div>
        </div>
      </section>
      <PageShell
        title="Excellence across Nigeria"
        subtitle="A snapshot of infrastructure and engineering work delivered with precision and commitment."
      >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article key={p.title} className="group rounded-2xl border border-[color:var(--line)] bg-white p-8 shadow-sm transition hover:shadow-xl">
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-bold leading-snug">{p.title}</h3>
              <span className="text-xs uppercase tracking-[0.25em] text-[color:var(--sea)] font-semibold">{p.meta}</span>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-[color:var(--muted)]">
              {p.scope.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[color:var(--sea)] shrink-0" aria-hidden />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </PageShell>
    </>
  );
}
