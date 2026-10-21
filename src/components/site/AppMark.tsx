import type { ReactNode } from 'react';
import { FaFacebookF, FaInstagram, FaSeedling, FaSpotify } from 'react-icons/fa';
import { FaBluesky, FaXTwitter } from 'react-icons/fa6';

export default function AppMark({ name, className = '' }: { name: string; className?: string }) {
  const icons: Record<string, ReactNode> = {
    bluesky: <FaBluesky />, instagram: <FaInstagram />, facebook: <FaFacebookF />,
    twitter: <FaXTwitter />, spotify: <FaSpotify />, growagarden: <FaSeedling />,
    roblox: <svg viewBox="0 0 40 40" fill="currentColor"><path fillRule="evenodd" d="M10 1 39 10 30 39 1 30 10 1Zm7 13-3 9 9 3 3-9-9-3Z" /></svg>,
  };
  return <span className={`app-mark ${className}`} aria-hidden="true">{icons[name] || <img src="/logo.webp" alt="" width="40" height="40" />}</span>;
}
