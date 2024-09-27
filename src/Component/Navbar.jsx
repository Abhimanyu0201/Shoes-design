import React from 'react';


export const Navbar = () => {
  return (
    <nav className="container w-full flex justify-between font-semibold items-center px-16 py-5">
      <div className="logo">
        <img src="/Image/brand_logo.png" alt="logo" />
      </div>
      <ul className="flex gap-5 uppercase cursor-pointer">
        <li className="hover:text-red-400">
          Home
        </li>
        <li className="hover:text-red-400">
          Location
        </li>
        <li className="hover:text-red-400">
          About
        </li>
        <li className="hover:text-red-400">
          Contact
        </li>
      </ul>
      <button className="border-2 rounded-md px-5 py-1 bg-red-500 text-white">Login</button>
    </nav>
  );
};
