"use client";

import React, { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 100) {
        setScrolled(true); // 设置为蓝色
      } else {
        setScrolled(false); // 透明
      }

      if (scrollPosition < 600) {
        setActiveItem('home');
      } else if (scrollPosition >= 600 && scrollPosition < 1200) {
        setActiveItem('about');
      } else if (scrollPosition >= 1200 && scrollPosition < 1800) {
        setActiveItem('portfolio');
      } else {
        setActiveItem('services');
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
      <div className="navbarContainer">
        <ul className="nav-links flex justify-around relative">
          {['home', 'about', 'portfolio', 'services'].map((item) => (
            <li onClick={(e) => handleNavbarBtnClick(e, item)} key={item} className={`relative navbarItem ${activeItem === item && item != "home" ? 'active' : ''}`}>
              <a
                href={`#${item}`}
                className="text-white font-bold"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
              {activeItem === item && item != "home" && (
                <div className="navbarItem-decoration"></div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}