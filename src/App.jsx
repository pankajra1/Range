import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';
import Cm from './components/Cm';
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
        <Route path='/cm' element={<Cm />} />
        <Route path='/home' element={<Home />} />
                <Route   path='/compf' element={<Cm />} />
      </Routes>
      </Layout>
      <Footer />
    </Router>
  );
}

export default App;
