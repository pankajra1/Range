import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes, NavLink, useNavigate
} from "react-router-dom";
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../firebase'
import logo from "../assets/logo.png"
const SignUp = () => {
    const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const onSubmit = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            navigate("/")
            console.log("signed up");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
 
    }
  return (
    <div className='flex bg-slate-200 justify-center items-center w-full h-[100vh]'>
            <div className='left bg-blue-500 w-80 h-[24rem] shadow-md flex items-center justify-center'>
                <img src={logo} alt="" className='w-60' />
            </div>
            <div className='right bg-white w-80 h-[24rem] shadow-md flex flex-col items-center'>
                <div className='heading text-2xl font-bold mt-10'><p>Sign Up</p></div>
                <form>
                    <div className='username mt-4'>
                        <input type="text" placeholder='email' required value={email} onChange={(e) => setEmail(e.target.value)} className='border border-black rounded-sm h-8 w-60 p-2' />
                    </div>
                    <div className='username mt-4'>
                        <input type="text" placeholder='password' required value={password} onChange={(e) => setPassword(e.target.value)} className='border border-black rounded-sm h-8 w-60 p-2' />
                    </div>
                    <div className='submit'>
                        <button type='submit' onClick={onSubmit} className='mt-4 border bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-white hover:border hover:border-blue-500 hover:text-blue-500 '>Sign Up</button>
                    </div>
                </form>
                <div className='signUp mt-4'>
                    <p className='text-sm'>Already have an account? <span className='font-medium'><Link to={"/"} >Login</Link></span></p>
                </div>
            </div>
    </div>
  )
}

export default SignUp