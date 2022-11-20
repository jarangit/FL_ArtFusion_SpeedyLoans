import './App.css';
import Banner from './components/layout/Banner'
import Footer from './components/layout/footer';
import According from './components/sections/according';
import AdvantagesSection from './components/sections/advantages';
import FastSection from './components/sections/fast';
import HowItWorksSection from './components/sections/howItWorks';
import WhatMakesSection from './components/sections/whatMakes';
import { useEffect, useState } from 'react';
import FloatButton from './components/layout/floatButton';
function App() {

  const [showBut, setShowBut] = useState(false)
  console.log('%cMyProject%cline:12%cshowBut', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(89, 61, 67);padding:3px;border-radius:2px', showBut)
  useEffect(() => {
    window.addEventListener('scroll', pop);
    return () => window.removeEventListener('scroll', pop);
  }, []);

  const pop = () => {
    console.log(window.scrollY)
    if (window.scrollY > 1000) {
      setShowBut(true);
    } else {
      setShowBut(false);
    }
  }
  const onClickToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }
  return (
    <div className='relative'>
      <Banner />
      <AdvantagesSection />
      <HowItWorksSection />
      <FastSection />
      <According />
      <WhatMakesSection
        onClickToTop={onClickToTop}
      />
      <Footer />

      <FloatButton
        onClickToTop={onClickToTop}
        showBut={showBut}
      />
    </div>
  );
}

export default App;
