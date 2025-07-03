import React from 'react';
import { Button } from 'antd';

export interface DownloadButtonProps {
  icon?: React.ReactNode;
  text: string;
  href: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ icon, text, href }) => (
  <Button type="primary" icon={icon} size="large" href={href} style={{ borderRadius: 10, margin: 8 }}>
    {text}
  </Button>
);

export default DownloadButton; 