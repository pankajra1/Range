import React from 'react';
import Navbar from '../src/components/navbar.jsx';
import Footer from '../src/components/Footer'; // Make sure the path is correct

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
