import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import cf from '../assets/course1.png';
import cybsec from '../assets/course2.png';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="max-w-screen-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
        <div className="text-center">
          <img src={user.picture} alt={user.name} className="rounded-full bg-gray-300 w-24 h-24 mx-auto mb-4" />
          <h2 className="text-lg font-semibold mb-2">{user.name}</h2>
          <p className="text-gray-600 text-sm mb-2">{user.email}</p>
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
    )
  );
};

export default Profile;
