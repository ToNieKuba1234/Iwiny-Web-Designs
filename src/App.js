import './index.css';
import React, { useState } from 'react';

import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';

function App() {
  const [ mobileMenu, setMobileMenu ] = useState(false);

  return (
    <div className='w-screen h-screen overflow-x-hidden'>  
      <Navbar setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />
      <MobileMenu mobileMenu={mobileMenu} />
    </div>
  );
}

export default App;
