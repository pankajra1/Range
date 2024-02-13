import { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
// import SignUp from './components/SignUp'
import './App.css'

import SignUp from './components/SignUp';
import Login from './components/Login';
<<<<<<< HEAD
import Home from './components/Home';
import Footer from './components/Footer';
function App() {
    return (
      <>
      <Home/>
     <Footer/>
      </>
=======
import Home from "./Home"
function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/home' element={<Home />} />
            </Routes>
        </Router>
>>>>>>> 73226ddc87a22f71ce2c8f327e9984db1c325840
    )
}

export default App
