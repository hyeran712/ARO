import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="header-logo">ARO</div>
        <nav className="header-nav">
          <a href="#about">ABOUT</a>
          <a href="#wedding">WEDDING</a>
          <a href="#menu">MENU</a>
          <a href="#gallery">GALLERY</a>
          <a href="#service">SERVICE</a>
          <a href="#journal">JOURNAL</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
