import type { ReactNode } from 'react';

export function PageShell({ title, subtitle, children }: { title: string; subtitle?: string; children: ReactNode }) {
  return (
    <section className="container-padded py-20">
      <div className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#003780]">
          <span className="text-2xl font-black">D</span>asonic
        </p>
        <h1 className="brand-title mt-4 text-4xl md:text-5xl">{title}</h1>
        {subtitle ? (
          <p className="brand-lead mt-6 text-lg md:text-xl">{subtitle}</p>
        ) : null}
      </div>
      <div className="mt-12">{children}</div>
    </section>
  );
}
