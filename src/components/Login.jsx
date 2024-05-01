import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import logo from '../assets/logo.png';
import sprinkleSvg from '../assets/Sprinkle.svg';

const Login = () => {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0(); 

  // Redirect user to home page if authenticated
  if (isAuthenticated) {
    window.location.href = "/home";
  }

  return (
    <div className="login-wrapper flex justify-center items-center w-full h-[100vh]" style={{ backgroundImage: `url(${sprinkleSvg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="left bg-blue-500 w-80 h-[24rem] shadow-md flex items-center justify-center relative z-10 rounded-lg">
        <img src={logo} alt="Logo" className="w-60 z-20 relative" />
      </div>

      <form className="right bg-white w-80 h-[24rem] shadow-md flex flex-col items-center relative z-10 rounded-lg">
        <div className="heading text-2xl font-bold mt-10">
          LOGIN
        </div>
        <button onClick={() => loginWithRedirect()} className="submit mt-4 border bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-white hover:border hover:border-blue-500 hover:text-blue-500">
          Continue to Range
        </button>
        {isLoading && <p>Loading...</p>}
      </form>
    </div>
  );
};

export default Login;
