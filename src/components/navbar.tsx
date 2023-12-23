import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-center items-center p-5 mb-7">
      <Link to='/' className='text-center font-bold text-4xl mr-10'>
        Home
      </Link>
      <Link to='/team' className='text-center font-bold text-4xl'>
        Team
      </Link>
    </div>
  );
};

export default Navbar;
