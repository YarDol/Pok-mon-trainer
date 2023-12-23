import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen py-12 px-2'>{children}</div>
  );
};

export default Container;
