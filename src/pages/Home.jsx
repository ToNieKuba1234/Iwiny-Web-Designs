import React from 'react';
import LandingPage from '../components/LandingPage';
import WhoAreWeSection from '../components/WhoAreWeSection';

export default function Home() {
  return (
    <div className="w-full">
      <LandingPage />
      <WhoAreWeSection />
    </div>
  );
}