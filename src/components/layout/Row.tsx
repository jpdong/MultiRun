import React from 'react';

interface RowProps {
  gutter?: [number, number];
  align?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const Row: React.FC<RowProps> = ({ children, style }) => (
  <div className="flex flex-wrap -m-2.5" style={style}>
    {children}
  </div>
);

export default Row;
