"use client";

import React, { useEffect, useState } from "react";
import { TEXTS } from '../constants/texts';


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("home");
  const [isOpen, setIsOpen] = useState(false); // 新增狀態控制選單
  const windowOffset = 48;
  const SECTION_IDS = ["home", "about", "portfolio", "services"];

  useEffect(() => {
    const calculateSectionPositions = () => {
      return SECTION_IDS.map((id) => {
        const element = document.getElementById(id);
        if (!element) return null;
        const { top } = element.getBoundingClientRect();
        return { id, top: top + window.scrollY - windowOffset };
      });
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 100);

      const sectionPositions = calculateSectionPositions();
      const currentSection = sectionPositions.find(
        (section, index) =>
          section &&
          scrollPosition >= section.top &&
          (index === sectionPositions.length - 1 ||
            scrollPosition < sectionPositions[index + 1]?.top)
      );
      if (currentSection) setActiveItem(currentSection.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavbarBtnClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const { top } = targetElement.getBoundingClientRect();
      const offsetPosition = top + window.scrollY - windowOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false); // 點擊後關閉選單
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbarContainer">
        {/* mobile menu button */}
        <button
          className="hamburger-menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          {TEXTS.MENU}
        </button>

        {/* mobile menu */}
        <ul className={`mobile-menu ${isOpen ? "menu-open" : ""}`}>
          {SECTION_IDS.map((item) => (
            <li
              key={item}
              onClick={(e) => handleNavbarBtnClick(e, item)}
              className={`menu-item ${activeItem === item ? "active" : ""}`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </li>
          ))}
        </ul>

        {/* desktop menu */}
        <ul className="nav-links">
          {SECTION_IDS.map((item) => (
            <li
              key={item}
              onClick={(e) => handleNavbarBtnClick(e, item)}
              className={`relative navbarItem ${activeItem === item && item !== "home" ? "active" : ""
                }`}
            >
              <a href={`#${item}`} className="text-white font-bold">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
              {activeItem === item && item !== "home" && (
                <div className="navbarItem-decoration"></div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
