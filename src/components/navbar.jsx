import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faGripLinesVertical, faUser } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
import { useAuth0 } from '@auth0/auth0-react'; // Import useAuth0 hook

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const dropdownRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 598 });
  const { user, isAuthenticated, logout } = useAuth0(); // Destructure user, isAuthenticated, and logout from useAuth0

  useEffect(() => {
    if (isAuthenticated) {
      setUserEmail(user.email);
    } else {
      setUserEmail("");
    }
  }, [isAuthenticated, user]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const logoutHandler = () => {
    logout({ returnTo: window.location.origin }); // Logout and return to the current URL
  };

  const dropdownToggleRef = useRef(null);

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/home">
        <img src={logo} alt="Logo" className="h-10" />
      </Link>

      {/* Navigation Links */}
      <div
        className={`flex items-center space-x-4 ${
          isMobile ? "hidden" : "block"
        }`}
      >
        <Link to="/home" className="text-white hover:text-gray-300">
          Learn
        </Link>
        <Link to="/Live" className="text-white hover:text-gray-300">
          Live
        </Link>
        <Link to="/discussion" className="text-white hover:text-gray-300">
          Discussion
        </Link>
      </div>

      {/* Dropdown */}
      <div className="relative z-20">
        {isMobile && (
          <>
            <button
              onClick={toggleDropdown}
              className="text-white hover:text-gray-300 z-"
              ref={dropdownToggleRef}
            >
              <FontAwesomeIcon icon={dropdownOpen ? faTimes : faBars} />
            </button>
          </>
        )}
        {!isMobile && (
          <>
            <button
              onClick={toggleDropdown}
              className="text-white hover:text-gray-300 flex items-center"
            >
              <FontAwesomeIcon icon={faUser} className="h-6 mr-2" />
              <span>{userEmail}</span>
            </button>
          </>
        )}
        {dropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute bg-white mt-2 p-2 rounded shadow z-30"
            style={{
              right:
                dropdownRef.current && dropdownRef.current.offsetWidth > 200
                  ? "auto"
                  : "0",
              minWidth: "150px", // Ensures the dropdown is wide enough
            }}
          >
            {/* Conditionally render links based on isMobile */}
            {isMobile && (
              <>
                <Link
                  to="/home"
                  className="block text-gray-800 hover:bg-gray-200 py-1 px-4 whitespace-nowrap"
                >
                  Learn
                </Link>
                <Link
                  to="/live"
                  className="block text-gray-800 hover:bg-gray-200 py-1 px-4 whitespace-nowrap"
                >
                  Live
                </Link>
                <Link
                  to="/discussion"
                  className="block text-gray-800 hover:bg-gray-200 py-1 px-4 whitespace-nowrap"
                >
                  Discussion
                </Link>
              </>
            )}
            {!isMobile}
            <Link
              to="/profile"
              className="block text-gray-800 hover:bg-gray-200 py-1 px-4 whitespace-nowrap"
            >
              Profile
            </Link>
            {/* Display logout link only when user is authenticated */}
            {isAuthenticated && (
              <button
                onClick={logoutHandler}
                className="block text-gray-800 hover:bg-gray-200 py-1 px-4 whitespace-nowrap"
              >
                Sign Out
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
