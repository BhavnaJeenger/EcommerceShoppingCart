import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const cartItemCount = useSelector(state=>state.cart.item)


  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl">Shooping Cart</h1>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/cart">cart({cartItemCount.length})</Link>
      </div>
    </nav>
  );
};

export default Navbar;
