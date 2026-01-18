'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 transition-transform group-hover:scale-105">
              <Image
                src="/logo.svg"
                alt="Blade Landscaping"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span
              className={`text-xl font-bold transition-colors ${
                isScrolled ? 'text-[var(--blade-charcoal)]' : 'text-white'
              }`}
            >
              Blade Landscaping
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors hover:text-[var(--blade-green)] ${
                  isScrolled ? 'text-[var(--blade-gray)]' : 'text-white/90'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary">
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 transition-all ${
                isScrolled ? 'bg-[var(--blade-charcoal)]' : 'bg-white'
              } ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`w-6 h-0.5 transition-all ${
                isScrolled ? 'bg-[var(--blade-charcoal)]' : 'bg-white'
              } ${isMobileMenuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`w-6 h-0.5 transition-all ${
                isScrolled ? 'bg-[var(--blade-charcoal)]' : 'bg-white'
              } ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mobile-menu-enter mt-4 pb-4 border-t border-[var(--blade-light)]">
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-medium text-lg transition-colors hover:text-[var(--blade-green)] ${
                    isScrolled ? 'text-[var(--blade-gray)]' : 'text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary w-fit"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
