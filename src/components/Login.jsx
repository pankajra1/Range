import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import logo from "../assets/logo.png"
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {
     const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = async (e) => {
        e.preventDefault();
        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/home")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }
  return (
    <div className='flex bg-slate-200 justify-center items-center w-full h-[100vh]'>
            <div className='left bg-blue-500 w-80 h-[24rem] shadow-md flex items-center justify-center'>
                <img src={logo} alt="" className='w-60' />
            </div>
            <form>
                <div className='right bg-white w-80 h-[24rem] shadow-md flex flex-col items-center'>
                    <div className='heading text-2xl font-bold mt-10'><p>LOGIN</p></div>
                    <div className='username mt-4'>
                        <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder='username' required className='border border-black rounded-sm h-8 w-60 p-2' />
                    </div>
                    <div className='username mt-4'>
                        <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder='password' required className='border border-black rounded-sm h-8 w-60 p-2' />
                    </div>
                    <div className='flex justify-between gap-10 mt-4'>
                        <div className='forgot flex gap-2'>
                            <input type="checkbox" name="" id="" className='border' />
                            <p className='text-blue-500 text-xs'>Remember Me</p>
                        </div>
                        <div className=''>
                            <p className='text-blue-500 text-xs'>Forgot Password</p>
                        </div>
                    </div>
                    <div className='submit'>
                        <button type='submit' onClick={onLogin} className='mt-4 border bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-white hover:border hover:border-blue-500 hover:text-blue-500 '>Login</button>
                    </div>
                    <div className='signUp mt-4'>
                        <p className='text-sm'>Don't have an account? <span className='font-medium'><Link to={"/signup"} >Sign up</Link></span></p>
                    </div>
                </div>
            </form>
    </div>
  )
}

export default Login