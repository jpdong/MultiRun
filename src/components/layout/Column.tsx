import React from 'react';

interface ColumnProps {
  xs?: number;
  md?: number;
  lg?: number;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const Column: React.FC<ColumnProps> = ({ xs, md, lg, children, style }) => {
  // Map old ant-design-style grid values to Tailwind widths
  let widthClass = '';
  if (lg === 6) widthClass = 'w-1/4';       // col-3: 25%
  else if (md === 12) widthClass = 'w-1/2';  // col-6: 50%
  else if (xs === 24) widthClass = 'w-full'; // col-12: 100%

  return (
    <div className={`p-2.5 ${widthClass}`} style={style}>
      {children}
    </div>
  );
};

export default Column;
