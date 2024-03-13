import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';
import Footer from './components/Footer'; // Import the Footer component
import Cm1 from './components/Cm1';
import Live from './components/Live';
// import Game1 from './components/game';
import Profile from './components/Profile';
import Featuredcompf from './components/Featuredcompf';
import Featuredcyber from './components/Featuredcyber';
import Layout from './layout';
import PostQuestion from './components/PostQuestion';
import Dashboard from './components/Dashboard';
import QuestionDetail from './components/QuestionDetail';

function App() {
  return (
    <Router>
      <Routes>
        {/* Login and SignUp routes */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* Routes with Layout */}
        <Route path="/home" element={<Layout><Home /></Layout>} />
        <Route path="/cm1" element={<Layout><Cm1 /></Layout>} />
        <Route path="/live" element={<Layout><Live /></Layout>} />
        <Route path="/Post" element={<Layout><PostQuestion /></Layout>} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/question/:id" element={<Layout><QuestionDetail /></Layout>} />
        <Route path="/profile" element={<Layout><Profile /></Layout>} />
        <Route path="/featuredcompf" element={<Layout><Featuredcompf /></Layout>} />
        <Route path="/featuredcyber" element={<Layout><Featuredcyber /></Layout>} />
      </Routes>

      {/* Footer outside the Routes */}
      <Footer />
    </Router>
  );
}

export default App;
