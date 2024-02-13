import React from "react"; 
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

      <div>
        <center>
          <h1 className="text-4xl mt-10 font-Helvetica">Start your cybersecurity learning</h1>
        </center>
        <div>
          <center>
            <h1 className="text-xl mt-5 font-Arial">Courses offered by Cyberpeace foundation</h1>
          </center>

        </div>
      </div>
      <div className="container mx-auto mt-8">
        <div className="flex justify-center item-center gap-10">
          {/* Card 1 */}
          <div className="max-w-md bg-white shadow-md rounded-md overflow-hidden mr-4">
            <img src={cf} alt="Placeholder" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Computer Fundamentals</h2>
              <p className="text-gray-700">course to get you ready with computers</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="max-w-md bg-white shadow-md rounded-md overflow-hidden">
            <img src={cybsec} alt="Placeholder" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">CyberSecurity Fundamentals</h2>
              <p className="text-gray-700">Start your journey in the field of cybersecurity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
