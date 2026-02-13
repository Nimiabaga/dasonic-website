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
    <section className="py-20 md:py-28">
      <div className="container-padded">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">{eyebrow}</p>
        ) : null}
        <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl max-w-4xl">{title}</h2>
        <div className="mt-10 text-[color:var(--ink)]">{children}</div>
      </div>
    </section>
  );
}
