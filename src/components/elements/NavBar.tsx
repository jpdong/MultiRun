'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { FaGlobe } from 'react-icons/fa';

import {
  defaultHomeLocale,
  homeLocaleConfig,
  homeLocalePath,
  type HomeLocale,
} from '../../i18n/home/config';
import { homeCopy, type HomeCopy } from '../../i18n/home/en';

type NavBarProps = {
  locale?: HomeLocale;
  copy?: HomeCopy['nav'];
  showLanguageSwitcher?: boolean;
};

export default function NavBar({
  locale = defaultHomeLocale,
  copy = homeCopy.nav,
  showLanguageSwitcher = false,
}: NavBarProps) {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const langSwitcherRef = useRef<HTMLDivElement>(null);

  const homePath = homeLocalePath(locale);
  const currentEntry = homeLocaleConfig[locale];
  const localeEntries = Object.entries(homeLocaleConfig) as [
    HomeLocale,
    (typeof homeLocaleConfig)[HomeLocale],
  ][];

  const links = [
    { href: homePath, label: copy.home },
    { href: '/hot-apps', label: copy.hotApps },
    { href: '/hot-games', label: copy.hotGames },
    { href: '/blog', label: copy.blog },
    { href: '/contact', label: copy.contact },
  ];

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

  useEffect(() => {
    if (!langOpen) return;
    const onPointerDown = (event: PointerEvent) => {
      if (
        langSwitcherRef.current &&
        !langSwitcherRef.current.contains(event.target as Node)
      ) {
        setLangOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLangOpen(false);
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [langOpen]);

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
          <Link href={homePath} className="logo">
            <img
              src="/logo.webp"
              alt={copy.logoAlt}
              width="40"
              height="40"
            />
            <span className="logo-text">{copy.brand}</span>
          </Link>
          <nav aria-label={copy.mainNavAriaLabel}>
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
            aria-label={copy.toggleMobileMenuAriaLabel}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </button>
          <div className="header-actions">
            {showLanguageSwitcher && (
              <div className="lang-switcher" ref={langSwitcherRef}>
                <button
                  type="button"
                  className="lang-trigger"
                  aria-expanded={langOpen}
                  aria-haspopup="true"
                  aria-label={`${copy.languageLabel}: ${currentEntry.label}`}
                  onClick={() => setLangOpen((prev) => !prev)}
                >
                  <FaGlobe aria-hidden="true" />
                  <span>{currentEntry.label}</span>
                  <span className="lang-chevron" aria-hidden="true">
                    ▾
                  </span>
                </button>
                {langOpen && (
                  <div
                    className="lang-dropdown"
                    role="menu"
                    aria-label={copy.languageLabel}
                  >
                    {localeEntries.map(([code, entry]) => (
                      <Link
                        key={code}
                        href={homeLocalePath(code)}
                        lang={entry.htmlLang}
                        hrefLang={entry.htmlLang}
                        role="menuitem"
                        className={code === locale ? 'is-active' : undefined}
                        aria-current={code === locale ? 'page' : undefined}
                        onClick={() => setLangOpen(false)}
                      >
                        {entry.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
            <a href={`${homePath}#download`} className="btn">
              {copy.downloadNow}
            </a>
          </div>
        </div>
      </header>
      <button
        type="button"
        className="mobile-nav-overlay"
        aria-label={copy.closeMobileMenuAriaLabel}
        tabIndex={-1}
        onClick={() => {
          setOpen(false);
          toggle.current?.focus();
        }}
      />
      <nav
        id="mobile-navigation"
        className="mobile-nav"
        aria-label={copy.mobileNavAriaLabel}
        inert={!open}
      >
        <div className="mobile-nav-header">
          <Link href={homePath} className="logo" onClick={() => setOpen(false)}>
            <img
              src="/logo.webp"
              alt={copy.logoAlt}
              width="32"
              height="32"
            />
            <span className="logo-text">{copy.brand}</span>
          </Link>
          <button
            type="button"
            ref={closeButton}
            className="mobile-nav-close"
            aria-label={copy.closeMobileMenuAriaLabel}
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
        {showLanguageSwitcher && (
          <div className="mobile-lang-section">
            <p className="mobile-lang-title">{copy.languageLabel}</p>
            <div className="mobile-lang-list">
              {localeEntries.map(([code, entry]) => (
                <Link
                  key={code}
                  href={homeLocalePath(code)}
                  lang={entry.htmlLang}
                  hrefLang={entry.htmlLang}
                  className={
                    code === locale
                      ? 'mobile-lang-link is-active'
                      : 'mobile-lang-link'
                  }
                  aria-current={code === locale ? 'page' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {entry.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
