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
import WebDev from './pages/WebDev';
import SEO from './pages/SEO';
import GPA from './pages/GPA';
import About from './pages/About';
import FAQ from './pages/FAQ';
import useScrollToTop from './hooks/ScrollToTop';

function App() {
  const [mobileMenu, setMobileMenu] = useState(false);

  useScrollToTop();
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Navbar setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />
      <MobileMenu mobileMenu={mobileMenu} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cennik" element={<Price />} />
        <Route path='/kontakt' element={<Contact />} />
        <Route path='/webdev' element={<WebDev />}/>
        <Route path='/seo' element={<SEO />} />
        <Route path='/gpa' element={<GPA />} />
        <Route path='/onas' element={<About />} />
        <Route path='/faq' element={<FAQ/>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;