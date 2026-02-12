import type { ReactNode } from 'react';

export function PageShell({ title, subtitle, children }: { title: string; subtitle?: string; children: ReactNode }) {
  return (
    <section className="container-padded py-14">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h1>
        {subtitle ? <p className="mt-3 text-base text-slate-600 md:text-lg">{subtitle}</p> : null}
      </div>
      <div className="mt-10">{children}</div>
    </section>
  );
}
