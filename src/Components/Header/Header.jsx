import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="header">
      <div className="header__left">
        <h1>Develop<span>er</span></h1>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      {/* Nav Links */}
      <div className={`header__right ${isOpen ? 'show' : ''}`}>
        <Link to="about" smooth={true} duration={500}><h4>About Me</h4></Link>
        <Link to="skills" smooth={true} duration={500}><h4>Skills</h4></Link>
        <Link to="project" smooth={true} duration={500}><h4>Projects</h4></Link>
        <Link to="contact" smooth={true} duration={500}><h4>Contact</h4></Link>
      </div>
    </div>
  );
};

export default Header;
