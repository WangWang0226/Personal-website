import Home from './components/home';
import Navbar from './components/navbar';
import Skills from './components/skills';
import Portfolio from './components/portfolio';
import About from './components/about';

export default function Page() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Skills/>
    </div>
  );
}
