import type { ReactNode } from 'react';

export function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="py-14 md:py-20">
      <div className="container-padded">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">{eyebrow}</p>
        ) : null}
        <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
        <div className="mt-6 text-slate-700">{children}</div>
      </div>
    </section>
  );
}
