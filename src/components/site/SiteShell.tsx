import type { ReactNode } from 'react';
import Footer from '../elements/Footer';
import NavBar from '../elements/NavBar';
import PageMotion from './PageMotion';
import '../../views/home.css';
import './interior.css';

export default function SiteShell({ children, variant = '' }: { children: ReactNode; variant?: string }) {
  return <div className={`home-page subpage ${variant}`}>
    <NavBar />
    <PageMotion>{children}</PageMotion>
    <Footer />
  </div>;
}
