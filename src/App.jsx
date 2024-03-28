import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';
import Cm1 from './components/Cm1';
import Test from './components/testpage';
import Live from './components/Live';
import Profile from './components/Profile';
import Featuredcompf from './components/Featuredcompf';
import Featuredcyber from './components/Featuredcyber';
import Layout from './layout';
import PostQuestion from './components/PostQuestion';
import Dashboard from './components/Dashboard';
import QuestionDetail from './components/QuestionDetail';
import LivePage from './components/Liveroom';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setCurrentUser(user);
      } else {
        // User is signed out
        setCurrentUser(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);
  return (
    <Router>
      <Routes>
        {/* Login and SignUp routes */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Test" element={<Test />} />
        {/* Routes with Layout */}
        <Route path="/home" element={<Layout><Home /></Layout>} />
        <Route path="/cm1" element={<Layout><Cm1 /></Layout>} />
        <Route path="/live" element={<Layout><Live /></Layout>} />
        <Route path="/Liveroom/:roomId" element={<Layout><LivePage /></Layout>} />
        <Route path="/Post" element={<Layout><PostQuestion /></Layout>} />
        <Route path="/discussion" element={<Layout><Dashboard /></Layout>} />
        <Route path="/question/:id" element={<Layout><QuestionDetail /></Layout>} />
        <Route path="/profile" element={<Layout><Profile /></Layout>} />
        <Route path="/featuredcompf" element={<Layout><Featuredcompf /></Layout>} />
        <Route path="/featuredcyber" element={<Layout><Featuredcyber /></Layout>} />
      </Routes>

      {/* Footer outside the Routes */}
      
    </Router>
  );
}

export default App;
