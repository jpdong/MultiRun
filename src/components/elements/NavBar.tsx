import React from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => (
  <header className="header">
    <div className="header-content">
      <Link href="/" className="logo">
        <img src="/logo.webp" alt="Multiple Accounts Logo" />
        <span className="logo-text">Multi Run</span>
      </Link>
      <nav>
        <ul className="nav">
          <li><a href="/#features">Features</a></li>
          <li><a href="/#download">Download</a></li>
          <li><a href="/#faq">FAQ</a></li>
          <li><a href="/#testimonials">Testimonials</a></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
      <a href="/#download" className="btn">Download Now</a>
    </div>
  </header>
);

export default NavBar;
