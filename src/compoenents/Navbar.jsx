import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl">Shooping Cart</h1>
      <div className="flex gap-4">
        <Link to="/" className="text-white hover:text-orange-500 transition-colors">Home</Link>
        <Link to="/cart" className="text-white hover:text-orange-500 transition-colors">Cart</Link>
      </div>
    </nav>
  );
};

export default Navbar;
