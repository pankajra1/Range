import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '/src/assets/logo.png';
import dropdownIcon from '/src/assets/dropdown.png';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/home">
        <img src={logo} alt="Logo" className="h-10" />
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center space-x-4">
        <Link to="/home" className="text-white hover:text-gray-300">Learn</Link>
        <span className="text-white">|</span>
        <Link to="/Live" className="text-white hover:text-gray-300">Live</Link>
        <span className="text-white">|</span>
        <Link to="/dashboard" className="text-white hover:text-gray-300">Discussion</Link>
      </div>


      {/* Dropdown */}
      <div className="relative">
        <button onClick={toggleDropdown} className="text-white hover:text-gray-300">
          <img src={dropdownIcon} alt="Dropdown" className="h-6" />
        </button>
        {dropdownOpen && (
          <div
          ref={dropdownRef}
          className="absolute bg-white mt-2 p-2 rounded shadow"
          style={{
            right: dropdownRef.current && dropdownRef.current.offsetWidth > 200 ? 'auto' : '0',
            minWidth: '150px', // Ensures the dropdown is wide enough
          }}
        >
          <Link to="/profile" className="block text-gray-800 hover:bg-gray-200 py-1 px-4 whitespace-nowrap">Profile</Link>
          <Link to="/" className="block text-gray-800 hover:bg-gray-200 py-1 px-4 whitespace-nowrap">Sign Out</Link>
        </div>
        
        )}
      </div>
    </nav>
  );
}

export default Navbar;