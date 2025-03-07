import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Komponenty
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Footer from './components/Footer';

// Podstrony
import Home from './pages/Home';

function App() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Navbar setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />
      <MobileMenu mobileMenu={mobileMenu} />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;