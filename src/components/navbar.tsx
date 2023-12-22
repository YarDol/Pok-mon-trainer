import React from 'react';

interface NavbarProps {
  title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
  return (
    <div className='navbar'>
      <span className='navbar__title'>{title}</span>
    </div>
  );
};

export default Navbar;
