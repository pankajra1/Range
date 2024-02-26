// Profile.jsx
import React from 'react';
import profilePicture from '../assets/logo.png'; // Import the profile picture
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import cf from '../assets/course1.png'; // Import course images
import cybsec from '../assets/course2.png';

const Profile = () => {
  return (
    <div className="max-w-screen-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <div className="text-center">
        <img src={profilePicture} alt="Profile" className="rounded-full bg-gray-300 w-24 h-24 mx-auto mb-4" /> {/* Insert the profile picture */}
        <h2 className="text-lg font-semibold mb-2">Pankaj Rai</h2>
        <p className="text-gray-600 text-sm mb-2">pankajrai1807@gmail.com</p>
        <p className="text-gray-600 text-sm mb-6">+91 91545 43062</p>
      </div>

      {/* My Courses Section */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold mb-4">My Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Course Card 1 */}
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

          {/* Course Card 2 */}
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
};

export default Profile;
