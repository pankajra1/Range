import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import logo from "../assets/logo.png"
const SignUp = () => {
  return (
    <div className='flex bg-slate-200 justify-center items-center w-full h-[100vh]'>
            <div className='left bg-blue-500 w-80 h-[24rem] shadow-md flex items-center justify-center'>
                <img src={logo} alt="" className='w-60' />
            </div>
            <div className='right bg-white w-80 h-[24rem] shadow-md flex flex-col items-center'>
                <div className='heading text-2xl font-bold mt-10'><p>Sign Up</p></div>
                <div className='username mt-4'>
                    <input type="text" placeholder='username' required className='border border-black rounded-sm h-8 w-60 p-2' />
                </div>
                <div className='username mt-4'>
                    <input type="text" placeholder='password' required className='border border-black rounded-sm h-8 w-60 p-2' />
                </div>
                <div className='username mt-4'>
                    <input type="text" placeholder='Confirm password' required className='border border-black rounded-sm h-8 w-60 p-2' />
                </div>
                <div className='submit'>
                    <button className='mt-4 border bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-white hover:border hover:border-blue-500 hover:text-blue-500 '>Sign Up</button>
                </div>
                <div className='signUp mt-4'>
                    <p className='text-sm'>Already have an account? <span className='font-medium'><Link to={"/"} >Login</Link></span></p>
                </div>
            </div>
    </div>
  )
}

export default SignUp