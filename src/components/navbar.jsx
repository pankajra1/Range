import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '/src/assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripLinesVertical, faUser } from '@fortawesome/free-solid-svg-icons'; // Added faUser for the profile icon.

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const dropdownRef = useRef(null);

  useEffect(() => {
    setUserEmail(sessionStorage.getItem('userEmail') || ''); // Retrieve the email from session storage.

    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // Removed dropdownRef from dependencies to avoid unnecessary rebinds

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/home">
        <img src={logo} alt="Logo" className="h-14" />
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center space-x-4">
        <Link to="/home" className="text-white font-bold text-2xl hover:text-gray-300">Learn</Link>
        <span className="text-white mx-2">|</span>
        <Link to="/Live" className="text-white font-bold text-2xl hover:text-gray-300">Live</Link>
        <span className="text-white mx-2">|</span>
        <Link to="/discussion" className="text-white font-bold text-2xl hover:text-gray-300">Discussion</Link>
      </div>

      {/* Dropdown */}
      <div className="relative">
        <button onClick={toggleDropdown} className="text-white hover:text-gray-300 flex items-center">
          <FontAwesomeIcon icon={faUser} className="h-6 mr-2" /> {/* Profile icon */}
          <span>{userEmail}</span> {/* Displaying user email */}
        </button>
        {dropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute bg-white mt-2 p-2 rounded shadow"
            style={{
              right: dropdownRef.current && dropdownRef.current.offsetWidth > 200 ? 'auto' : '0',
              minWidth: '150px',
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
