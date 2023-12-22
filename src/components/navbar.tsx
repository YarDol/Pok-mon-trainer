import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <div className='navbar'>
      <Link to='/' className='navbar__title'>
        Home
      </Link>
      <Link to='/team' className='navbar__title'>
        Team
      </Link>
    </div>
  );
};

export default Navbar;
