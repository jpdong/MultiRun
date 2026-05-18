import React from 'react';

export interface DownloadButtonProps {
  icon?: React.ReactNode;
  text: string;
  href: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ icon, text, href }) => (
  <a
    href={href}
    className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white no-underline rounded-full text-base font-bold shadow-[0_4px_20px_rgba(0,98,255,0.3)] transition-all duration-300 hover:bg-primary-hover hover:scale-105 hover:shadow-[0_6px_28px_rgba(0,98,255,0.4)] m-2"
  >
    {icon}
    {text}
  </a>
);

export default DownloadButton;
