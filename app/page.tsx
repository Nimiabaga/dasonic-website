import Image from 'next/image';
import { HeroCarousel } from '@/components/hero-carousel';

const HOME_IMAGE_VERSION = '20260226';

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
    body: 'Dasonic & Company Nigeria Ltd has delivered engineering and project support services since 1997, building a proven record across public and private sector engagements. Our experience spans planning, execution, supervision, and long-term operational support, helping clients complete complex projects with confidence and consistency.',
    image: '/expertise-team.jpg',
    alt: 'Engineering leadership and project execution',
    label: 'Since 1997',
  },
  {
    title: 'Safety and compliance',
    body: 'Our HSE-first operating model integrates risk assessment, quality assurance, and compliance checks into every project phase. From pre-mobilization planning to on-site execution and close-out documentation, we maintain clear safety protocols that protect people, assets, and the surrounding environment.',
    image: '/safety-offshore.jpg',
    alt: 'Field team following safety and quality procedures',
    label: 'HSE First',
  },
  {
    title: 'Local content commitment',
    body: 'We prioritize Nigerian professionals, local suppliers, and in-country resources to strengthen value delivery within the communities we serve. At the same time, we align our work with international engineering and quality benchmarks, ensuring every project reflects both local relevance and global standards.',
    image: '/local-content-infrastructure.jpg',
    alt: 'Local workforce and engineering collaboration in Nigeria',
    label: 'Nigeria Focused',
  },
];

const values = [
  {
    title: 'Valued partnership',
    detail:
      'We build long-term relationships through trust, transparency, and consistent delivery across every engagement.',
    icon: '🤝',
  },
  {
    title: 'Integrity in service',
    detail:
      'We uphold ethical standards, clear accountability, and disciplined execution in every project phase.',
    icon: '🛡️',
  },
  {
    title: 'Customer focused',
    detail:
      'We align solutions to client priorities, timelines, and outcomes to ensure measurable project success.',
    icon: '🎯',
  },
  {
    title: 'Innovation driven',
    detail:
      'We apply practical innovation and modern engineering methods to improve quality, efficiency, and sustainability.',
    icon: '💡',
  },
];

const clients = [
  { src: '/client-01.png', alt: 'Dasonic client logo 1' },
  { src: '/client-02.png', alt: 'Dasonic client logo 2' },
  { src: '/client-03.png', alt: 'Dasonic client logo 3' },
  { src: '/client-04.png', alt: 'Dasonic client logo 4' },
  { src: '/client-05.png', alt: 'Dasonic client logo 5' },
  { src: '/client-06.png', alt: 'Dasonic client logo 6' },
];

const compliance = [
  { src: '/compliance-01.png', alt: 'Dasonic compliance logo 1' },
  { src: '/compliance-02.png', alt: 'Dasonic compliance logo 2' },
  { src: '/compliance-03.png', alt: 'Dasonic compliance logo 3' },
  { src: '/compliance-04.png', alt: 'Dasonic compliance logo 4' },
  { src: '/compliance-05.png', alt: 'Dasonic compliance logo 5' },
];

export default function HomePage() {
  return (
    <div className="bg-[color:var(--cloud)]">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Welcome Section */}
      <section className="bg-white py-12 md:py-16 lg:py-20 border-b border-[color:var(--line)]">
        <div className="container-padded">
          <div className="max-w-5xl">
            <div className="inline-block rounded-full bg-[#ff3131] px-4 md:px-5 py-2 mb-4 md:mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white">WELCOME</p>
            </div>
            <h1 className="brand-title text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Dasonic and Company <span className="whitespace-nowrap">(Nigeria) Ltd</span>
            </h1>
            <p className="brand-lead mt-4 md:mt-6 text-sm md:text-base lg:text-lg max-w-4xl">
              We deliver trusted engineering, infrastructure, and project execution services with a strong focus on safety,
              quality, and long-term value for clients across Nigeria.
            </p>
          </div>
        </div>
      </section>

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
                <Image src={`/impact-1.jpg?v=${HOME_IMAGE_VERSION}`} alt="Dasonic project impact" className="w-full rounded-lg object-contain" width={800} height={600} unoptimized />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md border border-gray-200 bg-white p-2.5 md:p-3">
                <Image src={`/impact-2.jpg?v=${HOME_IMAGE_VERSION}`} alt="Dasonic infrastructure work" className="w-full rounded-lg object-contain" width={800} height={600} unoptimized />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="bg-[color:var(--cloud)] py-20 md:py-24">
        <div className="container-padded">
          <div className="mb-10 md:mb-12 max-w-4xl">
            <div className="inline-block rounded-full bg-[#ff3131] px-4 md:px-5 py-2 mb-4 md:mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white">Why Dasonic</p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#003780] leading-tight">
              Built on experience, safety, and local value.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-2xl bg-white border border-[color:var(--line)] shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={`${item.image}?v=${HOME_IMAGE_VERSION}`}
                    alt={item.alt}
                    width={900}
                    height={600}
                    unoptimized
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)]/55 via-transparent to-transparent" />
                  <span className="absolute left-5 top-5 inline-flex rounded-full bg-white/95 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--sea)]">
                    {item.label}
                  </span>
                </div>
                <div className="p-8">
                  <div className="h-1.5 w-16 rounded-full mb-6 bg-[#ff3131]" />
                  <p className="text-xl font-bold text-[color:var(--ink)] leading-snug">{item.title}</p>
                  <p className="mt-4 text-base text-[color:var(--muted)] leading-relaxed">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-white py-20 md:py-24 border-t border-[color:var(--line)]">
        <div className="container-padded">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
            <h2 className="text-4xl md:text-5xl font-bold text-[color:var(--sea)] uppercase leading-tight">Our Values</h2>
            <div className="space-y-5">
              <p className="text-base md:text-lg text-[color:var(--ink)] leading-relaxed">
                Our values shape every aspect of our work. We are driven by excellence, innovation, and integrity while
                maintaining the highest standards of safety and compliance in all operations.
              </p>
              <p className="text-base md:text-lg text-[color:var(--ink)] leading-relaxed">
                These core principles guide us in delivering projects that reflect quality, precision, and long-term
                partnerships.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <article key={value.title} className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--cloud)] p-6 text-center shadow-sm">
                <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-white text-4xl shadow-sm">
                  <span aria-hidden>{value.icon}</span>
                </div>
                <h3 className="text-2xl font-bold uppercase leading-tight text-[color:var(--sea)]">{value.title}</h3>
                <p className="mt-4 text-sm md:text-base text-[color:var(--muted)] leading-relaxed">{value.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="bg-[color:var(--cloud)] pt-16 md:pt-20 pb-0 border-t border-[color:var(--line)]">
        <div className="container-padded">
          <h2 className="text-4xl md:text-5xl font-bold uppercase text-[color:var(--sea)] leading-tight">Our Clients</h2>
          <div className="clients-slider mt-10">
            <div className="clients-track">
              {[...clients, ...clients].map((client, index) => (
                <div key={`${client.src}-${index}`} className="clients-item">
                  <Image src={client.src} alt={client.alt} width={220} height={80} className="max-h-16 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive HSE Section */}
      <section className="container-padded pt-0 pb-12 md:pb-16">
        <details className="group overflow-hidden rounded-3xl bg-gradient-to-br from-[color:var(--dark-blue)] to-[color:var(--navy)] p-8 md:p-10 text-white shadow-2xl" open>
          <summary className="list-none cursor-pointer">
            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="bg-white/20 h-1.5 w-16 rounded-full mb-6" />
                <p className="text-2xl md:text-3xl font-bold">HSE and quality assurance</p>
                <p className="mt-2 text-sm md:text-base text-white/80">Tap to expand or collapse details</p>
              </div>
              <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-xl font-bold transition-transform group-open:rotate-45">
                +
              </span>
            </div>
          </summary>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-white/90">
            We maintain strict safety standards, proactive risk management, and continuous training to protect people,
            property, and the environment. Quality control is embedded in every phase of delivery, ensuring excellence
            from planning through execution.
          </p>
        </details>
      </section>

      {/* Our Compliance Section */}
      <section className="bg-[color:var(--cloud)] pt-0 pb-16 md:pb-20">
        <div className="container-padded">
          <h2 className="text-4xl md:text-5xl font-bold uppercase text-[color:var(--sea)] leading-tight">Our Compliance</h2>
          <div className="clients-slider mt-10">
            <div className="clients-track">
              {[...compliance, ...compliance].map((item, index) => (
                <div key={`${item.src}-${index}`} className="clients-item">
                  <Image src={item.src} alt={item.alt} width={220} height={80} className="max-h-16 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
