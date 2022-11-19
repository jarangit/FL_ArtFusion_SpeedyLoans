import './App.css';
import Banner from './components/layout/Banner'
import AdvantagesSection from './components/sections/advantages';
import HowItWorksSection from './components/sections/howItWorks';
function App() {
  return (
    <>
      <Banner />
      <div className='w-full !mx-auto lg:hidden'>
        <div id="_lg_form_" />
      </div>
      {/* section 1 */}
      <AdvantagesSection />
      <HowItWorksSection />
    </>
  );
}

export default App;
