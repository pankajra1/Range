import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import Layout from './layout';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';
import Cm1 from './components/Cm1';
import Test from './components/testpage';
import Live from './components/Live';
import Profile from './components/Profile';
import Featuredcompf from './components/Featuredcompf';
import Featuredcyber from './components/Featuredcyber';
import PostQuestion from './components/PostQuestion';
import Dashboard from './components/Dashboard';
import QuestionDetail from './components/QuestionDetail';
import LivePage from './components/Liveroom';

function App() {
  return (
    <Auth0Provider
      domain="cpfrange.us.auth0.com"
      clientId="fZSAfoYepGUzrQNvV1Z2AkCSycqLd1jS"
      redirectUri={window.location.origin}
    >
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
    </Auth0Provider>
  );
}

export default App;
