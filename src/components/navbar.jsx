// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '/src/assets/logo.png';
import dropdownIcon from '/src/assets/dropdown.png';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/home">
        <img src={logo} alt="Logo" className="h-8" />
      </Link>

      {/* Navigation Links */}
      <div className="flex space-x-4">
        <Link to="/home" className="text-white hover:text-gray-300">Learn</Link>
        <Link to="/live" className="text-white hover:text-gray-300">Live</Link>
        <Link to="/discussions" className="text-white hover:text-gray-300">Discussions</Link>
      </div>

      {/* Dropdown */}
      <div className="relative">
        <button onClick={toggleDropdown} className="text-white hover:text-gray-300">
          <img src={dropdownIcon} alt="Dropdown" className="h-6" />
        </button>
        {dropdownOpen && (
          <div className="absolute bg-white mt-2 p-2 rounded shadow">
            <Link to="/profile" className="block text-gray-800 hover:bg-gray-200 py-1 px-4">Profile</Link>
            <Link to="/logout" className="block text-gray-800 hover:bg-gray-200 py-1 px-4">Sign Out</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
