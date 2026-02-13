import Link from 'next/link';
import Image from 'next/image';
import { Section } from '@/components/section';
import { HeroCarousel } from '@/components/hero-carousel';

const stats = [
  {
    value: '27+',
    label: 'Years of Excellence',
    description: 'Since 1997',
  },
  {
    value: '500+',
    label: 'Projects Delivered',
    description: 'Across Nigeria',
  },
  {
    value: '100%',
    label: 'Safety Compliance',
    description: 'HSE Standards',
  },
  {
    value: '50+',
    label: 'Expert Team',
    description: 'Skilled Professionals',
  },
];

const highlights = [
  {
    title: 'Established expertise',
    body: 'Indigenous company incorporated in 1997 with a track record across public and private sectors.',
  },
  {
    title: 'Safety and compliance',
    body: 'HSE-first operations with proactive risk management and quality control standards.',
  },
  {
    title: 'Local content commitment',
    body: 'We prioritize Nigerian talent, materials, and suppliers while maintaining global standards.',
  },
];

const services = [
  {
    title: 'Custom fabrication and installation',
    body: 'Technical support for durable, high-performance systems delivered to specification.',
  },
  {
    title: 'Construction and project execution',
    body: 'Planning, design, and delivery of construction projects with tight schedule control.',
  },
  {
    title: 'Structural integrity and modeling',
    body: 'Design, analysis, modeling, and advisory services for safe, efficient infrastructure.',
  },
  {
    title: 'Environmental services',
    body: 'Impact assessments, remediation, monitoring, and compliance-focused reporting.',
  },
];

const projects = [
  {
    title: 'Road construction in Onelga, Rivers State',
    body: 'Site waste audit, segregation plan, licensed treatment, and hazardous waste handling to specification.',
  },
  {
    title: 'Cellar slab raft foundation for oil rig drilling platform',
    body: 'Site preparation, excavation, reinforcement, concrete works, and safety compliance inspections.',
  },
  {
    title: 'Concrete paving for heavy-duty vehicles and rig operations',
    body: 'Subgrade stabilization, high-strength paving, reinforcement, and curing for durability.',
  },
];

const leadership = [
  {
    name: 'Dagogo Ernest Ibiama',
    role: 'Chairman and Managing Director',
    body: 'Barrister with over a decade of industry leadership, delivering projects for Shell, NNPC, Total, and NLNG.',
  },
  {
    name: 'Boma Precious Kalama',
    role: 'HR Officer',
    body: 'Drives talent development, positive work culture, and operational performance through strategic HR.',
  },
];

export default function HomePage() {
  return (
    <div className="bg-[color:var(--cloud)]">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Stats Section */}
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="container-padded">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-24">
              <div className="inline-block rounded-full bg-[#ff3131] px-4 md:px-5 py-2 mb-4 md:mb-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white">OUR IMPACT</p>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#ff3131] leading-tight mb-4 md:mb-6">
                Our world,<br />in motion.
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-[#003780] leading-relaxed mb-6 md:mb-8">
                From global engagements to innovation in clean energy and sustainability, we are in constant motion on a journey to the top.
              </p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-4 md:gap-x-6 md:gap-y-5 lg:gap-x-8 lg:gap-y-6">
                {stats.map((stat, index) => (
                  <div key={stat.label}>
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#003780]">{stat.value}</div>
                    <div className="mt-1 md:mt-2 text-xs md:text-sm font-semibold text-[#ff3131]">{stat.label}</div>
                    <div className="mt-0.5 md:mt-1 text-xs text-[color:var(--muted)]">{stat.description}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4 md:space-y-5 max-w-full md:max-w-lg lg:max-w-md mx-auto lg:mx-0">
              <div className="rounded-xl overflow-hidden shadow-md border border-gray-200 bg-white p-2.5 md:p-3">
                <Image src="/impact-1.jpg" alt="Dasonic project impact" className="w-full rounded-lg object-contain" width={800} height={600} />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md border border-gray-200 bg-white p-2.5 md:p-3">
                <Image src="/impact-2.jpg" alt="Dasonic infrastructure work" className="w-full rounded-lg object-contain" width={800} height={600} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="bg-[color:var(--cloud)] py-20 md:py-24">
        <div className="container-padded">
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white border border-[color:var(--line)] p-8 shadow-lg">
                <div className="accent-bar h-1.5 w-16 rounded-full mb-6" />
                <p className="text-lg font-bold text-[color:var(--ink)]">{item.title}</p>
                <p className="mt-4 text-base text-[color:var(--muted)] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <Section eyebrow="Who we are" title="Engineering excellence is only half the story">
        <p className="text-xl text-[color:var(--muted)] leading-relaxed max-w-4xl mb-12">
          Beyond the projects we deliver, we are deeply invested in the long-term health of Nigeria's infrastructure, 
          the safety of our people, and the innovation that will shape the nation's engineering landscape for generations to come.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-[color:var(--line)] bg-white p-8 shadow-sm">
            <div className="accent-bar h-1.5 w-16 rounded-full mb-6" />
            <p className="text-xl font-bold mb-4">Company overview</p>
            <p className="text-base text-[color:var(--muted)] leading-relaxed">
              <span className="text-4xl font-black text-[#003780]">D</span><span className="font-bold text-[#003780]">asonic & Company</span> Nigeria Ltd is an indigenous firm incorporated in 1997 under the Companies and
              Allied Matters Act. We deliver engineering and facility management, procurement and logistics, project
              construction, consultancy, and structural integrity services across public and private sectors.
            </p>
          </div>
          <div className="rounded-2xl border border-[color:var(--line)] bg-white p-8 shadow-sm">
            <div className="accent-bar h-1.5 w-16 rounded-full mb-6" />
            <p className="text-xl font-bold mb-4">Client-first delivery</p>
            <p className="text-base text-[color:var(--muted)] leading-relaxed">
              Our client-centric approach blends technical expertise with rigorous quality, safety, and on-time delivery.
              We build long-term relationships through measurable performance, transparent collaboration, and unwavering 
              commitment to excellence.
            </p>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section eyebrow="Services" title="Integrated solutions that scale with your vision">
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {services.map((service) => (
            <div key={service.title} className="group rounded-2xl border border-[color:var(--line)] bg-white p-8 shadow-sm transition hover:shadow-xl hover:border-[color:var(--sea)]">
              <p className="text-lg font-bold text-[color:var(--ink)]">{service.title}</p>
              <p className="mt-4 text-base text-[color:var(--muted)] leading-relaxed">{service.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-[color:var(--line)] bg-gradient-to-br from-[color:var(--dark-blue)] to-[color:var(--navy)] p-10 text-white shadow-xl">
          <div className="bg-white/20 h-1.5 w-16 rounded-full mb-6" />
          <p className="text-xl font-bold mb-4">HSE and quality assurance</p>
          <p className="text-base leading-relaxed text-white/90">
            We maintain strict safety standards, proactive risk management, and continuous training to protect people,
            property, and the environment. Quality control is embedded in every phase of delivery, ensuring excellence 
            from planning through execution.
          </p>
        </div>
      </Section>

      {/* Projects Section */}
      <Section eyebrow="Projects" title="Our portfolio, in motion">
        <p className="text-xl text-[color:var(--muted)] leading-relaxed max-w-4xl mb-12">
          From infrastructure development to technical excellence, we are in constant motion on a journey 
          to deliver exceptional results across Nigeria.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="group rounded-2xl border border-[color:var(--line)] bg-white p-8 shadow-sm transition hover:shadow-xl">
              <h3 className="text-lg font-bold text-[color:var(--ink)] leading-snug">{project.title}</h3>
              <p className="mt-4 text-sm text-[color:var(--muted)] leading-relaxed">{project.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-base font-semibold text-[color:var(--sea)] no-underline transition hover:gap-3"
          >
            Explore all projects
            <span aria-hidden className="text-xl">→</span>
          </Link>
        </div>
      </Section>

      {/* Leadership Section */}
      <Section eyebrow="Leadership" title="Excellence through experienced leadership">
        <div className="grid gap-8 md:grid-cols-2">
          {leadership.map((leader) => (
            <div key={leader.name} className="rounded-2xl border border-[color:var(--line)] bg-white p-8 shadow-sm">
              <p className="text-xl font-bold text-[color:var(--ink)]">{leader.name}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[color:var(--sea)] font-semibold">{leader.role}</p>
              <p className="mt-6 text-base text-[color:var(--muted)] leading-relaxed">{leader.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <section className="container-padded pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[color:var(--dark-blue)] to-[color:var(--navy)] p-12 md:p-16 shadow-2xl">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.3),transparent_50%)]"></div>
          </div>
          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">Get in touch</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                Partner with Nigeria&apos;s trusted engineering experts.
              </h2>
              <p className="mt-6 text-base text-white/90 md:text-lg leading-relaxed">
                Reach out for consultations, project scoping, and technical support. We respond quickly with clear
                guidance and delivery excellence.
              </p>
            </div>
            <div className="flex flex-col gap-4 shrink-0">
              <Link
                href="mailto:dasonicandcoy@yahoo.com?subject=Project%20Enquiry"
                className="rounded-full bg-white px-8 py-4 text-center text-base font-semibold text-[color:var(--dark-blue)] no-underline transition hover:bg-white/90"
              >
                Email Enquiries
              </Link>
              <Link
                href="/contact"
                className="rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-center text-base font-semibold text-white no-underline backdrop-blur transition hover:bg-white/20"
              >
                View Contact Details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
