import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white min-h-[calc(100vh-64px)] flex flex-col justify-center items-center text-center">
      {/* Logo or App Name */}
      <h1 className="text-4xl font-bold mb-4">Welcome to My Pomodoro App</h1>

      {/* Short Description of the App */}
      <p className="text-lg mb-8 max-w-md text-center">
        Boost your productivity using the Pomodoro technique. Our app helps you
        manage your time effectively with customizable timers, progress
        tracking, and more.
      </p>

      {/* Call to Action */}
      <Link
        to="/session"
        className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg"
      >
        Get Started
      </Link>
    </header>
  );
};
export default Header;
