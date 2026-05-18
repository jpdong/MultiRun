import React from 'react';

const SectionTitle: React.FC<React.PropsWithChildren<{ style?: React.CSSProperties }>> = ({ children, style }) => (
  <h2 className="text-center text-[2rem] mb-[50px] text-dark" style={style}>{children}</h2>
);

export default SectionTitle;
