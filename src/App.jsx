import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css';

import Cm from "./components/Cm"
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
                <Route path='/compf' element={<Cm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
