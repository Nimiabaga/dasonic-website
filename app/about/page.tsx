import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About Us',
};

const coreValues = [
  {
    title: 'Integrity',
    note: 'We act with honesty, accountability, and transparency in every engagement.',
    icon: '🛡️',
  },
  {
    title: 'Safety First',
    note: 'We prioritize the health and safety of people, assets, and the environment.',
    icon: '⛑️',
  },
  {
    title: 'Quality Delivery',
    note: 'We maintain high standards from planning to final handover.',
    icon: '✅',
  },
  {
    title: 'Innovation',
    note: 'We adopt practical, modern solutions that improve outcomes and efficiency.',
    icon: '💡',
  },
  {
    title: 'Sustainability',
    note: 'We deliver long-term value through responsible and future-ready operations.',
    icon: '🌱',
  },
  {
    title: 'Local Content Commitment',
    note: 'We strengthen in-country capability through Nigerian talent and resources.',
    icon: '🤝',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative h-[26rem] overflow-hidden md:h-[34rem]">
        <Image src="/about-hero.jpg" alt="About Dasonic team" className="h-full w-full object-cover" width={1920} height={1080} priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--dark-blue)] via-[color:var(--dark-blue)]/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-padded">
            <div className="inline-block rounded-full bg-white/15 px-4 py-2 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white">About Us</p>
            </div>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-6xl max-w-4xl">
              About Us
            </h1>
            <p className="mt-5 max-w-3xl text-base md:text-lg text-white/90 leading-relaxed">
              A brief story of Dasonic & Company Nigeria Ltd.
            </p>
          </div>
        </div>
      </section>
      <section className="container-padded py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="rounded-2xl border border-[color:var(--line)] bg-white p-8 shadow-sm">
            <div className="accent-bar h-1.5 w-16 rounded-full mb-6" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--sea)] mb-3">Our Story</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--ink)] leading-tight mb-4">
              A trusted Nigerian engineering company since 1997.
            </h2>
            <p className="text-base md:text-lg text-[color:var(--muted)] leading-relaxed">
              Dasonic &amp; Company Nigeria Ltd was incorporated in 1997 as an indigenous company committed to delivering
              reliable engineering and infrastructure solutions. Over the years, we have built a strong reputation for
              quality delivery, safety-first operations, and long-term client partnerships across public and private sectors.
            </p>
            <p className="mt-4 text-base md:text-lg text-[color:var(--muted)] leading-relaxed">
              Today, we continue to combine technical expertise, disciplined execution, and local content commitment to
              create sustainable value for clients and communities across Nigeria.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[color:var(--line)] bg-white p-2 shadow-sm">
            <Image
              src="/about-story.png"
              alt="Dasonic company team and operations"
              width={1000}
              height={1200}
              className="h-[420px] w-full rounded-xl object-cover"
            />
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <article className="relative overflow-hidden rounded-2xl border border-[color:var(--line)] bg-gradient-to-br from-[color:var(--dark-blue)] to-[color:var(--navy)] p-8 shadow-xl">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.35),transparent_45%)]" />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.25em] font-semibold text-white/70">Mission</p>
              <p className="mt-3 text-2xl font-bold text-white">Our Mission</p>
              <p className="mt-4 text-base md:text-lg text-white/90 leading-relaxed">
              To deliver dependable, safe, and cost-effective engineering and infrastructure solutions through strong
              technical expertise, disciplined execution, and client-focused service.
              </p>
            </div>
          </article>
          <article className="relative overflow-hidden rounded-2xl border border-[#ff3131]/30 bg-gradient-to-br from-[#ff3131] to-[#b91c1c] p-8 shadow-xl">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.35),transparent_45%)]" />
            <p className="relative text-xs uppercase tracking-[0.25em] font-semibold text-white/80">Vision</p>
            <p className="relative mt-3 text-2xl font-bold text-white">Our Vision</p>
            <p className="relative mt-4 text-base md:text-lg text-white/90 leading-relaxed">
              To be a trusted and leading Nigerian engineering company recognized for quality delivery, safety
              excellence, and sustainable value creation across every project we execute.
            </p>
          </article>
        </div>

        <section className="mt-12 rounded-2xl border border-[color:var(--line)] bg-white p-8 shadow-sm">
          <div className="accent-bar h-1.5 w-16 rounded-full mb-6" />
          <p className="text-xl font-bold text-[color:var(--ink)] mb-2">Core Values</p>
          <p className="text-base text-[color:var(--muted)] leading-relaxed mb-6">
            Principles that guide how we work, collaborate, and deliver outcomes.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value, index) => {
              const isRed = index % 2 === 1;
              return (
                <article
                  key={value.title}
                  className={`relative overflow-hidden rounded-xl border px-5 py-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
                    isRed
                      ? 'border-[#ff3131]/25 bg-[#fff5f5]'
                      : 'border-[#003780]/20 bg-[#f4f9ff]'
                  }`}
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span
                      aria-hidden
                      className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-lg ${
                        isRed ? 'bg-[#ff3131] text-white' : 'bg-[#003780] text-white'
                      }`}
                    >
                      {value.icon}
                    </span>
                    <p className={`text-sm md:text-base font-bold uppercase tracking-[0.06em] ${isRed ? 'text-[#b91c1c]' : 'text-[#003780]'}`}>
                      {value.title}
                    </p>
                  </div>
                  <p className="mt-2 text-sm text-[color:var(--muted)] leading-relaxed">{value.note}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-[color:var(--line)] bg-white p-8 shadow-sm">
          <div className="accent-bar h-1.5 w-16 rounded-full mb-6" />
          <p className="text-xl font-bold text-[color:var(--ink)] mb-6">Chairman / Managing Director</p>
          <div className="grid gap-8 md:grid-cols-[280px_1fr] md:items-start">
            <div className="overflow-hidden rounded-xl border border-[color:var(--line)] bg-white p-2 shadow-sm">
              <Image
                src="/about-chairman-md.png"
                alt="Chairman and Managing Director"
                width={560}
                height={720}
                className="h-[320px] w-full rounded-lg object-cover"
              />
            </div>
            <article className="rounded-xl border border-[color:var(--line)] bg-[color:var(--cloud)] p-6 md:p-8">
              <p className="text-2xl font-bold text-[color:var(--ink)]">Dagogo Ernest Ibiama</p>
              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[color:var(--sea)] font-semibold">
                Chairman and Managing Director
              </p>
              <p className="mt-6 text-base md:text-lg text-[color:var(--muted)] leading-relaxed">
                Barrister and industry leader with over a decade of executive experience in engineering and project
                delivery. He has led successful engagements for major organizations including Shell, NNPC, Total, and
                NLNG, with a strong focus on safety, transparency, and measurable client outcomes.
              </p>
            </article>
          </div>
        </section>

        <section className="mt-12 relative overflow-hidden rounded-3xl border border-[color:var(--line)]">
          <Image
            src="/about-bottom-bg.avif"
            alt="Dasonic operations"
            width={1920}
            height={700}
            className="h-[320px] md:h-[360px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-white/85" />
          <div className="absolute inset-0 flex items-center">
            <div className="container-padded text-center">
              <h3 className="text-3xl md:text-5xl font-bold text-[color:var(--sea)] uppercase">
                Want to Learn More About Us?
              </h3>
              <p className="mt-4 max-w-3xl mx-auto text-base md:text-lg text-[color:var(--ink)]">
                Contact us or download our company profile to discover how we can add value to your operations.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="/dasonic-company-profile.pdf"
                  download
                  className="inline-flex h-14 items-center justify-center rounded-full bg-[color:var(--navy)] px-8 text-sm font-semibold uppercase tracking-[0.08em] text-white no-underline transition hover:bg-[color:var(--sea)]"
                >
                  Click Here to Download Our Company Profile
                </a>
                <Link
                  href="/contact"
                  className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--navy)] text-white text-xl no-underline transition hover:bg-[color:var(--sea)]"
                  aria-label="Contact us"
                >
                  ✉
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
