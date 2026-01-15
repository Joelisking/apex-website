'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import MobileMenu from './mobile-menu';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

function Navbar() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled
      setIsScrolled(window.scrollY > 10);

      // Find which section is at the navbar position
      const navbarHeight = 80;
      const sections = document.querySelectorAll(
        '[data-navbar-theme]'
      );

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // Check if the section is at the navbar position
        if (rect.top <= navbarHeight && rect.bottom >= navbarHeight) {
          const sectionTheme = section.getAttribute(
            'data-navbar-theme'
          );
          if (sectionTheme === 'dark' || sectionTheme === 'light') {
            setTheme(sectionTheme);
          }
        }
      });
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset theme on route change
  useEffect(() => {
    const detectTheme = () => {
      const sections = document.querySelectorAll('[data-navbar-theme]');
      if (sections.length > 0) {
        const firstSection = sections[0];
        const sectionTheme = firstSection.getAttribute('data-navbar-theme');
        if (sectionTheme === 'dark' || sectionTheme === 'light') {
          setTheme(sectionTheme);
          return;
        }
      }
      setTheme('light');
    };

    const timer = setTimeout(detectTheme, 50);
    return () => clearTimeout(timer);
  }, [pathname]);

  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const logoFilter = theme === 'dark' ? 'brightness-0 invert' : '';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-5'
        }`}>
        {/* Optional subtle background when scrolled */}
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${
            isScrolled ? 'opacity-100' : 'opacity-0'
          } ${
            theme === 'dark' ? 'bg-black/20' : 'bg-white/20'
          } backdrop-blur-sm`}
        />

        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-10">
              <Image
                src="/logo.png"
                alt="APEX Consulting & Surveying"
                width={120}
                height={40}
                className={`h-10 w-auto transition-all duration-300 ${logoFilter}`}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${textColor} ${
                    pathname === link.href ? 'text-primary' : ''
                  }`}>
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors">
              Get in Touch
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`lg:hidden p-2 transition-colors ${textColor}`}
              aria-label="Open menu">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={navLinks}
        currentPath={pathname}
      />
    </>
  );
}

export default Navbar;
