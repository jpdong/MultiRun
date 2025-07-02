import React from 'react';

const SectionTitle: React.FC<React.PropsWithChildren<{ style?: React.CSSProperties }>> = ({ children, style }) => (
  <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: 50, color: '#2c3e50', ...style }}>{children}</h2>
);

export default SectionTitle; 