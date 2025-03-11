import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Komponenty
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Footer from './components/Footer';

// Podstrony
import Home from './pages/Home';
import Price from './pages/Price';
import Contact from './pages/Contact';

function App() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Navbar setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />
      <MobileMenu mobileMenu={mobileMenu} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cennik" element={<Price />} />
        <Route path='/kontakt' element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;