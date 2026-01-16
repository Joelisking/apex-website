'use client';

import { useEffect } from 'react';
import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
  currentPath: string;
}

function MobileMenu({ isOpen, onClose, links, currentPath }: MobileMenuProps) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        className={`fixed top-0 left-0 right-0 bg-white z-50 transform transition-transform duration-300 lg:hidden shadow-lg ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4 border-b border-gray-200">
          <button
            onClick={onClose}
            className="p-2 text-gray-600 hover:text-gray-900"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="px-6 py-4">
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className={`block py-3 text-base font-medium transition-colors ${
                    currentPath === link.href
                      ? 'text-primary'
                      : 'text-gray-900 hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="px-6 pb-6 border-t border-gray-200 pt-4">
          <Link
            href="/contact"
            onClick={onClose}
            className="block w-full text-center bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
