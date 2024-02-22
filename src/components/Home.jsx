import React from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/logo.png";
import cf from "/src/assets/cf.avif";
import cybsec from "/src/assets/cybsec.jpg";

function Home() {
  return (
    <div>
      {/* Main Content */}
      <div className="text-center mt-10 px-4">
        <h1 className="text-3xl md:text-4xl font-Helvetica">Start your cybersecurity learning</h1>
        <h2 className="text-lg md:text-xl mt-3 font-Arial">Choose your Path from the Courses offered by Cyberpeace foundation</h2>
      </div>

      {/* Course Cards */}
      <div className="container mx-auto mt-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Card 1 */}
          <Link to="/Featuredcompf" className="block">
            <div className="overflow-hidden bg-white shadow-md rounded-md transition duration-300 ease-in-out transform hover:scale-105 group">
              <div className="overflow-hidden">
                <img src={cf} alt="Computer Fundamentals" className="w-full h-56 object-cover" />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">Computer Fundamentals</h2>
                <p className="text-gray-700">Course to get you ready with computers</p>
              </div>
            </div>
          </Link>

          {/* Card 2 */}
          <Link to="/Featuredcyber" className="block">
            <div className="overflow-hidden bg-white shadow-md rounded-md transition duration-300 ease-in-out transform hover:scale-105 group">
              <div className="overflow-hidden">
                <img src={cybsec} alt="CyberSecurity Fundamentals" className="w-full h-56 object-cover" />
              </div>
              <div className="p-4">
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
