'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/hot-apps', label: 'Hot Apps' },
  { href: '/hot-games', label: 'Hot Games' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    closeButton.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);
  return (
    <>
      <input
        type="checkbox"
        id="mobile-menu-toggle"
        className="mobile-menu-checkbox"
        checked={open}
        readOnly
        aria-hidden="true"
        tabIndex={-1}
      />
      <header className="header">
        <div className="header-content">
          <Link href="/" className="logo">
            <img
              src="/logo.webp"
              alt="Multiple Accounts Logo"
              width="40"
              height="40"
            />
            <span className="logo-text">Multi Run</span>
          </Link>
          <nav aria-label="Main navigation">
            <ul className="nav">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            type="button"
            ref={toggle}
            className="mobile-menu-toggle"
            aria-label="Toggle mobile menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </button>
          <a href="/#download" className="btn">
            Download Now
          </a>
        </div>
      </header>
      <button
        type="button"
        className="mobile-nav-overlay"
        aria-label="Close mobile menu"
        tabIndex={-1}
        onClick={() => {
          setOpen(false);
          toggle.current?.focus();
        }}
      />
      <nav
        id="mobile-navigation"
        className="mobile-nav"
        aria-label="Mobile navigation"
        inert={!open}
      >
        <div className="mobile-nav-header">
          <Link href="/" className="logo" onClick={() => setOpen(false)}>
            <img
              src="/logo.webp"
              alt="Multiple Accounts Logo"
              width="32"
              height="32"
            />
            <span className="logo-text">Multi Run</span>
          </Link>
          <button
            type="button"
            ref={closeButton}
            className="mobile-nav-close"
            aria-label="Close mobile menu"
            onClick={() => {
              setOpen(false);
              toggle.current?.focus();
            }}
          >
            ×
          </button>
        </div>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
