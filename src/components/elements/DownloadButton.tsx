import React from 'react';

export interface DownloadButtonProps {
  icon?: React.ReactNode;
  text: string;
  href: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ icon, text, href }) => (
  <a
    href={href}
    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white no-underline rounded-[10px] text-base font-medium transition-colors duration-300 hover:bg-primary-hover m-2"
  >
    {icon}
    {text}
  </a>
);

export default DownloadButton;
