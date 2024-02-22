// Layout.js
import React from 'react';
import Navbar from '../src/components/navbar.jsx';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4">
        {children}
      </div>
    </div>
  );
}

export default Layout;
