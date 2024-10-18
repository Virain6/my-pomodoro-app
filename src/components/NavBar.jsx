import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State to manage whether the mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 w-full p-4 top-0">
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <Link to="/" className="text-white text-lg font-bold">
          My Pomodoro
        </Link>

        {/* Nav Links for larger screens */}
        <div className="hidden lg:flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/session" className="text-white hover:text-gray-300">
            Session
          </Link>
          <Link to="/preference" className="text-white hover:text-gray-300">
            Preference
          </Link>
          <Link to="/account" className="text-white hover:text-gray-300">
            Account
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="flex flex-col space-y-4 mt-4 lg:hidden">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/session" className="text-white hover:text-gray-300">
            Session
          </Link>
          <Link to="/preference" className="text-white hover:text-gray-300">
            Preference
          </Link>
          <Link to="/account" className="text-white hover:text-gray-300">
            Account
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
