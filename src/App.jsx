import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';
import Cm1 from './components/Cm1';
import Profile from './components/Profile';
import Featuredcompf from './components/Featuredcompf';
import Featuredcyber from './components/Featuredcyber';
import Footer from './components/Footer';
import './App.css';
import Layout from './layout';
function App() {
  return (
    <Router>
      <Layout>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/Featuredcompf' element={<Featuredcompf/>}/>
        <Route path='/Featuredcyber' element={<Featuredcyber/>}/>
        <Route path='/cm1' element={<Cm1 />} />
        <Route path='/home' element={<Home />} />
        <Route path='/Profile' element={<Profile />} />
                <Route   path='/compf' element={<Cm1 />} />
      </Routes>
      </Layout>
      <Footer />
    </Router>
  );
}

export default App;
