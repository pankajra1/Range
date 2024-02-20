import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import logo from "/src/assets/logo.png";
import cf from "/src/assets/cf.avif";
import cybsec from "/src/assets/cybsec.jpg";

function Home() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between bg-gray-800 p-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-16 mr-4" />
        </div>

        {/* Logout Button */}
        <button className="text-white font-impact">Logout</button>
      </nav>

      {/* Main Content */}
      <div className="text-center mt-10">
        <h1 className="text-4xl font-Helvetica">Start your cybersecurity learning</h1>
        <h2 className="text-xl mt-5 font-Arial">Choose your Path from the Courses offered by Cyberpeace foundation</h2>
      </div>

      <div className="container mx-auto mt-8 px-40 mt-10 px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Card 1 */}
          <Link to="/Featured"> {/* Replace anchor tag with Link and set "to" attribute to the desired route */}
            <div className="relative overflow-hidden bg-white shadow-md rounded-md transition duration-300 ease-in-out transform hover:scale-105 group">
              <div className="overflow-hidden">
                <img src={cf} alt="Computer Fundamentals" className="w-full h-64 object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"></div>
              <div className="p-4 relative z-10">
                <h2 className="text-xl font-bold mb-2">Computer Fundamentals</h2>
                <p className="text-gray-700">Course to get you ready with computers</p>
              </div>
            </div>
          </Link>

          {/* Card 2 */}
          <Link to="/Featured"> {/* Replace anchor tag with Link and set "to" attribute to the desired route */}
            <div className="relative overflow-hidden bg-white shadow-md rounded-md transition duration-300 ease-in-out transform hover:scale-105 group">
              <div className="overflow-hidden">
                <img src={cybsec} alt="CyberSecurity Fundamentals" className="w-full h-64 object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"></div>
              <div className="p-4 relative z-10">
                <h2 className="text-xl font-bold mb-2">CyberSecurity Fundamentals</h2>
                <p className="text-gray-700">Start your journey in the field of cybersecurity</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
