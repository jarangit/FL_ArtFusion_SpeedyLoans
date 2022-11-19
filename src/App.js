import './App.css';
import Banner from './components/layout/Banner'
import Footer from './components/layout/footer';
import AdvantagesSection from './components/sections/advantages';
import FastSection from './components/sections/fast';
import HowItWorksSection from './components/sections/howItWorks';
import WhatMakesSection from './components/sections/whatMakes';
function App() {
  return (
    <>
      <Banner />
 
      <AdvantagesSection />
      <HowItWorksSection />
      <FastSection />
      <WhatMakesSection />
      <Footer/>
    </>
  );
}

export default App;
