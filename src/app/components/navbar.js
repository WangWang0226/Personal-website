"use client";

import React, { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 100) {
           setScrolled(true); // 设置为蓝色
        } else {
           setScrolled(false); // 透明
        }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const handleNavbarBtnClick = (e, targetId) => {
    e.preventDefault(); // 阻止默认行为
    const targetElement = document.getElementById(targetId); // 获取目标元素

    // 平滑滚动到目标元素
    targetElement.scrollIntoView({
        behavior: 'smooth'
    });
};
    
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div class="container">
          <div class="logo">Your Logo</div>
          <ul class="nav-links">
              <li><a href="#home" onClick={(e) => handleNavbarBtnClick(e, 'home')}>Home</a></li>
              <li><a href="#about" onClick={(e) => handleNavbarBtnClick(e, 'about')}>About</a></li>
          </ul>
      </div>
    </nav>
  );
}