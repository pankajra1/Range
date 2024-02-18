import React from "react"; 
import logo from "/src/assets/logo.png";
import cf from "/src/assets/cf.avif";
import cybsec from "/src/assets/cybsec.jpg";
import course1 from "/src/assets/course1.png";
import course2 from "/src/assets/course2.png";
import course3 from "/src/assets/course3.png";
import course4 from "/src/assets/course4.png";
import course5 from "/src/assets/course5.png";
import course6 from "/src/assets/course6.png";
function Featured() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between bg-gray-800 p-4">
        {/* Logo with link */}
        <a href="https://cyberpeace.org" target="_blank" rel="noopener noreferrer">
          <img src={logo} alt="Logo" className="h-16 mr-4" />
        </a>

        {/* Logout Button with link */}
        <a href="https://cyberrange.com/login" target="_blank" rel="noopener noreferrer" className="text-white font-impact">Logout</a>
      </nav>

      {/* Main Content */}

      <div>
        <center>
        <h1 className="text-5xl mt-10 font-Helvetica font-bold text-customPurple">Computer Fundamentals</h1>
        <h2 className="text-2xl mt-5 font-Helvetica">Featured Courses</h2>
        </center>
      </div>

      <div className="container mx-auto mt-8 px-20">
        <div className="grid grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="max-w-md bg-white shadow-md rounded-md overflow-hidden">
            <img src={course1} alt="Course1" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Course 1</h2>
              <p className="text-gray-700">This is the First course that we want to sell to you</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="max-w-md bg-white shadow-md rounded-md overflow-hidden">
            <img src={cybsec} alt="CyberSecurity Fundamentals" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Course 2</h2>
              <p className="text-gray-700">This is the Second course that we want to sell to you</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="max-w-md bg-white shadow-md rounded-md overflow-hidden">
            <img src={cf} alt="Computer Fundamentals" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Course 3</h2>
              <p className="text-gray-700">This is the Third course that we want to sell to you</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="max-w-md bg-white shadow-md rounded-md overflow-hidden">
            <img src={cybsec} alt="CyberSecurity Fundamentals" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Course 4</h2>
              <p className="text-gray-700">This is the Fourth course that we want to sell to you</p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="max-w-md bg-white shadow-md rounded-md overflow-hidden">
            <img src={cf} alt="Computer Fundamentals" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Course 5</h2>
              <p className="text-gray-700">This is the Fifth course that we want to sell to you</p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="max-w-md bg-white shadow-md rounded-md overflow-hidden">
            <img src={cybsec} alt="CyberSecurity Fundamentals" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Course 6</h2>
              <p className="text-gray-700">This is the Sixth course that we want to sell to you</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
