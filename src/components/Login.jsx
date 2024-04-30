import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react'; // Import the useAuth0 hook
import logo from '../assets/logo.png';
import sprinkleSvg from '../assets/Sprinkle.svg';

const Login = () => {
  const { loginWithRedirect } = useAuth0(); // Destructure the loginWithRedirect method from useAuth0 hook

  const handleContinueToRange = () => {
    // Redirect to Auth0 login for the Range
    loginWithRedirect();
  };

  const handleContinueToDashboard = () => {
    // Redirect to Dashboard (you can add your logic here)
  };

  return (
    <div className="login-wrapper flex justify-center items-center w-full h-[100vh]" style={{ backgroundImage: `url(${sprinkleSvg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="left bg-blue-500 w-80 h-[24rem] shadow-md flex items-center justify-center relative z-10 rounded-lg">
        <img src={logo} alt="Logo" className="w-60 z-20 relative" />
      </div>

      <form className="right bg-white w-80 h-[24rem] shadow-md flex flex-col items-center relative z-10 rounded-lg">
        <div className="heading text-2xl font-bold mt-10">
          LOGIN
        </div>
        {/* Two buttons for continuing to Range and Dashboard */}
        <button onClick={handleContinueToRange} className="submit mt-4 border bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-white hover:border hover:border-blue-500 hover:text-blue-500">
          Continue to Range
        </button>
        <button onClick={handleContinueToDashboard} className="submit mt-4 border bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-white hover:border hover:border-blue-500 hover:text-blue-500">
          Continue to Dashboard
        </button>
        {/* <div className="signUp mt-4">
          Don't have an account?{' '}
          <span className="font-medium">
            <Link to="/signup">Sign up</Link>
          </span>
        </div> */}
      </form>
    </div>
  );
};

export default Login;
