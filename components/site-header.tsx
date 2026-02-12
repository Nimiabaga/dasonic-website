import Link from 'next/link';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="container-padded flex h-16 items-center justify-between">
        <Link href="/" className="no-underline">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-semibold tracking-tight">Dasonic</span>
            <span className="text-xs text-slate-500">Website</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-700 no-underline hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white no-underline hover:bg-slate-800"
        >
          Get in touch
        </Link>
      </div>
    </header>
  );
}
