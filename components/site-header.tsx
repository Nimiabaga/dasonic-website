'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="h-2 bg-[#ff3131]"></div>
      <header className="sticky top-0 z-50 border-b border-[color:var(--line)] bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container-padded flex h-16 md:h-20 lg:h-24 items-center justify-between">
        <Link href="/" className="no-underline shrink-0">
          <div className="flex flex-col items-center min-w-max">
            <Image src="/logo.png" alt="Dasonic and Company" width={100} height={56} className="h-8 md:h-10 lg:h-14 w-auto mb-0" priority />
            <div className="flex flex-col items-center leading-tight whitespace-nowrap -mt-1 md:-mt-2">
              <span className="text-xs md:text-sm lg:text-base font-bold tracking-normal text-[#003780] uppercase font-serif">
                Dasonic And Company
              </span>
              <span className="text-[10px] md:text-xs tracking-wide text-[#003780] font-medium font-serif">(Nigeria) Ltd</span>
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[color:var(--muted)] no-underline transition hover:text-[#003780]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#003780]"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <Link
          href="/contact"
          className="hidden md:inline-block rounded-full bg-[#003780] px-6 py-3 text-sm font-semibold text-white no-underline transition hover:bg-[#0052b4]"
        >
          Get In Touch
        </Link>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[color:var(--line)] bg-white">
          <nav className="container-padded py-4 flex flex-col gap-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[color:var(--muted)] no-underline transition hover:text-[#003780] py-2"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 rounded-full bg-[#003780] px-6 py-3 text-sm font-semibold text-white no-underline transition hover:bg-[#0052b4] text-center"
            >
              Get In Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
    </>
  );
}
