import Home from './mainSections/home';
import Navbar from './mainSections/navbar';
import Portfolio from './mainSections/portfolio';
import About from './mainSections/about';
import TransitionBanner from './mainSections/transitionBanner';
import Services from './mainSections/services';

export default function Page() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <TransitionBanner/>
      <Services/>
    </div>
  );
}
