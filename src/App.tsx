import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VitalSigns from './components/VitalSigns';
import CarbonCalculator from './components/CarbonCalculator';
import BiodiversitySpotlight from './components/BiodiversitySpotlight';
import CollectiveAction from './components/CollectiveAction';
import ActionHub from './components/ActionHub';
import CommunityStats from './components/CommunityStats';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-blue-900">
      <Header />
      <Hero />
      <VitalSigns />
      <CarbonCalculator />
      <BiodiversitySpotlight />
      <CollectiveAction />
      <ActionHub />
      <CommunityStats />
      <Footer />
    </div>
  );
}

export default App;