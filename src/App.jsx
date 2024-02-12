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
import Home from './components/Home';
import Footer from './components/Footer';
function App() {
    return (
      <>
      <Home/>
     <Footer/>
      </>
    )
}

export default App
