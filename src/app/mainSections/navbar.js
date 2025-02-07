"use client";

import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("home");

  // Define section IDs
  const SECTION_IDS = ["home", "about", "portfolio", "services"];

  useEffect(() => {
    // Function to calculate section positions
    const calculateSectionPositions = () => {
      return SECTION_IDS.map((id) => {
        const element = document.getElementById(id);
        if (!element) return null; // Handle cases where the element is not found
        const { top } = element.getBoundingClientRect();
        return { id, top: top + window.scrollY }; // Add scroll offset
      });
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 100);

      // Dynamically determine the active section
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
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbarContainer">
        <ul className="nav-links flex justify-around relative">
          {SECTION_IDS.map((item) => (
            <li
              key={item}
              onClick={(e) => handleNavbarBtnClick(e, item)}
              className={`relative navbarItem ${
                activeItem === item && item !== "home" ? "active" : ""
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
