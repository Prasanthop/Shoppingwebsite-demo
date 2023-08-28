import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import logo from "../assets/images/logo.jpg";

function Navbar() {
  return (
    <div className='bg-green-900'>
      <div className='flex justify-between items-center p-4'>
        <Link to="/img">
          <img
            src={logo}
            alt="Prasants Veggies Logo"
            className="w-20 h-20 rounded-md object-contain hover:scale-110 transition-transform"
          />
        </Link>
        <h1 className='text-white text-4xl hover:text-green-600 transition hover:scale-110'>Prasanth Shoppee..</h1>
        <ul className='flex text-white font-bold cursor-pointer '>
          <li className='mr-4'>
            <Link to="/products" className="hover:text-green-600 transition hover:scale-110">Products</Link>
          </li>
          <li className='mr-4'>
            <Link to="/about" className="hover:text-green-600 transition hover:scale-110">About</Link>
          </li>
          <li className='mr-4'>
            <Link to="/contact" className="hover:text-green-600 transition hover:scale-110">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

