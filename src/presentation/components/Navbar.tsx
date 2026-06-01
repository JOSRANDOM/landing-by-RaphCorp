'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#contacto', label: 'Contacto' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#04091C]/95 backdrop-blur-sm border-b border-[#0F1C3F]' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-raph.png" alt="Raph-Corp" width={32} height={32} className="rounded-sm" />
          <span className="text-[12px] font-bold text-white tracking-[0.15em] uppercase">Raph-Corp</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[11px] uppercase tracking-[0.15em] text-[#3B4E78] hover:text-white transition-colors duration-200 font-medium"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <Link
          href="#contacto"
          className="hidden md:flex items-center gap-2.5 border border-[#0F1C3F] hover:border-[#5B8DFF] px-5 py-2 text-[11px] uppercase tracking-[0.15em] text-[#888] hover:text-[#5B8DFF] transition-all duration-300 font-medium"
        >
          Hablemos
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#3B4E78] hover:text-white transition-colors p-1"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#0F1C3F] bg-[#04091C] px-6 py-8 flex flex-col gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[11px] uppercase tracking-[0.15em] text-[#3B4E78] hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#contacto"
            onClick={() => setOpen(false)}
            className="border border-[#0F1C3F] py-3 text-[11px] uppercase tracking-[0.15em] text-white text-center"
          >
            Hablemos
          </Link>
        </div>
      )}
    </nav>
  );
}
