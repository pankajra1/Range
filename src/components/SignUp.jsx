import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import logo from '../assets/logo.png';
import sprinkleSvg from '../assets/Sprinkle.svg';
import backgroundGif from '../assets/background.gif';

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');

  const validateEmail = (email) => {
    // Simple email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const onPasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // Password strength suggestion based on length
    if (newPassword.length < 6) {
      setPasswordStrength('Password is too weak');
    } else if (newPassword.length < 10) {
      setPasswordStrength('Password strength: Weak');
    } else if (newPassword.length < 14) {
      setPasswordStrength('Password strength: Medium');
    } else {
      setPasswordStrength('Password strength: Strong');
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      alert('Invalid email format');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate('/');
        console.log('signed up');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="flex bg-slate-200 justify-center items-center w-full h-[100vh]"
    style={{ backgroundImage: `url(${sprinkleSvg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="left bg-blue-500 w-80 h-[24rem] shadow-md flex items-center justify-center relative z-10 rounded-lg" style={{ backgroundImage: `url(${backgroundGif})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
       <img src={logo} alt="Logo" className="w-60 z-20 relative" />
      </div>

      <div className="right bg-white w-80 h-[24rem] shadow-md flex flex-col items-center">
        <div className="heading text-2xl font-bold mt-10">
          <p>Sign Up</p>
        </div>
        <form>
          <div className="username mt-4">
            <input
              type="text"
              placeholder="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-black rounded-sm h-8 w-60 p-2"
            />
          </div>
          <div className="password mt-4">
            <input
              type="password"
              placeholder="password"
              required
              value={password}
              onChange={onPasswordChange}
              className="border border-black rounded-sm h-8 w-60 p-2"
            />
          </div>
          <div className="confirm-password mt-4">
            <input
              type="password"
              placeholder="confirm password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border border-black rounded-sm h-8 w-60 p-2"
            />
          </div>
          <div className="password-strength text-xs mt-1">{passwordStrength}</div>
          <div className="submit">
            <button
              type="submit"
              onClick={onSubmit}
              className="mt-4 border bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-white hover:border hover:border-blue-500 hover:text-blue-500 "
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="signUp mt-4">
          <p className="text-sm">
            Already have an account?{' '}
            <span className="font-medium">
              <Link to={'/'}>Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
