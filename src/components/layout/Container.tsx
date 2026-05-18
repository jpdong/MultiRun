import React from 'react';

const Container: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="max-w-[1200px] mx-auto px-5">{children}</div>
);

export default Container;
