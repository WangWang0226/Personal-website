"use client";

import Home from './mainSections/home';
import Navbar from './mainSections/navbar';
import Portfolio from './mainSections/portfolio';
import About from './mainSections/about';
import TransitionBanner from './mainSections/transitionBanner';
import Services from './mainSections/services';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



export default function Page() {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 1000, // 動畫持續時間
        delay: 100,
        // once: true, // 是否只觸發一次
      });
    }
  }, []);

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
