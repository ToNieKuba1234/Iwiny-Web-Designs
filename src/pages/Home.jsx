import React from 'react';

//Komponenty
import LandingPage from '../components/Home/LandingPage';
import WhoAreWeSection from '../components/Home/WhoAreWeSection';
import InfoSection from '../components/Home/InfoSection';
import Technologies from '../components/Home/Technologies';

export default function Home() {
  return (
    <div className="w-full">
      <LandingPage />
      <WhoAreWeSection />
      <InfoSection />
      <Technologies />
    </div>
  );
}