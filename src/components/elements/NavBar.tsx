'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/hot-apps', label: 'Hot Apps' },
    { href: '/hot-games', label: 'Hot Games' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header className="bg-white shadow-[0_2px_10px_rgba(0,0,0,0.07)] px-6 py-4 flex items-center z-[100] sticky top-0">
        <div className="flex items-center justify-between w-full max-w-[1200px] mx-auto">
          <Link href="/" className="flex items-center no-underline text-dark">
            <img src="/logo.webp" alt="Multiple Accounts Logo" className="w-10 h-10 mr-3" />
            <span className="text-2xl font-bold">Multi Run</span>
          </Link>

          <nav>
            <ul className="hidden md:flex list-none gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="no-underline text-[#666] font-medium transition-colors duration-300 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden bg-none border-none cursor-pointer p-2 text-dark z-[1001] relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className={`block w-6 h-0.5 bg-current my-[5px] transition-all duration-300 rounded-sm ${mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current my-[5px] transition-all duration-300 rounded-sm ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current my-[5px] transition-all duration-300 rounded-sm ${mobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
          </button>

          <a href="/#download" className="hidden md:inline-block px-4 py-2 bg-primary text-white no-underline rounded hover:bg-primary-hover transition-colors duration-300 cursor-pointer text-sm">
            Download Now
          </a>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-[999] transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Navigation Menu */}
      <nav className={`fixed top-0 ${mobileMenuOpen ? 'left-0' : '-left-[280px]'} w-[280px] h-full bg-white z-[1000] transition-left duration-300 shadow-[2px_0_10px_rgba(0,0,0,0.1)] p-8 px-6 overflow-y-auto`}>
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-border">
          <Link href="/" className="flex items-center no-underline text-dark" onClick={() => setMobileMenuOpen(false)}>
            <img src="/logo.webp" alt="Multiple Accounts Logo" width="32" height="32" />
            <span className="text-2xl font-bold ml-3">Multi Run</span>
          </Link>
          <button
            className="bg-none border-none text-3xl cursor-pointer text-[#6b7280] p-1 hover:text-dark"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close mobile menu"
          >
            &times;
          </button>
        </div>
        <ul className="list-none p-0 m-0">
          {navLinks.map((link) => (
            <li key={link.href} className="mb-4">
              <Link
                href={link.href}
                className="block text-dark no-underline font-medium py-3 border-b border-border-light hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
