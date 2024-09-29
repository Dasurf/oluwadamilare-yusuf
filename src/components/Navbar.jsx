import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import webIcon from "/static/dasurf.jpg";
import openMenu from "/static/menu.svg";
import closeMenu from "/static/close.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

  // Toggles the mobile menu open/close
  function toggleMenu() {
    setIsOpen(prev => !prev);
  }

  // Handles window resize to toggle between mobile and desktop menu
  function handleResize() {
    if (window.innerWidth > 700) {
      setIsOpen(true); // Ensure the menu is open when switching back to desktop
    } else {
      setIsOpen(false); // Ensure the menu is closed when switching to mobile
    }
    setIsMobile(window.innerWidth <= 700); // Set mobile state based on screen width
  }

  // Closes the mobile menu when a menu item is clicked
  function handleMenuItemClick() {
    if (isMobile) {
      setIsOpen(false); // Close menu after clicking an item in mobile mode
    }
  }

  // Add and remove the resize event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className={`nav ${isOpen ? "no-shadow" : ""}`}>
      <Link data-aos="zoom-out" className='icon-section' to='/'>
        <img src={webIcon} width="50px" height="50px" alt="nav icon" />
        <h3>OLUWADAMILARE YUSUF</h3>
      </Link>
      <ul className={`menu ${isOpen ? "show-menu" : ""}`} data-aos={!isOpen && "zoom-out"}>
        <li><Link to='/home' onClick={handleMenuItemClick}>HOME</Link></li>
        <li><Link to='/about' onClick={handleMenuItemClick}>ABOUT</Link></li>
        <li><Link to='/projects' onClick={handleMenuItemClick}>PROJECTS</Link></li>
        <li><Link to='/contact' onClick={handleMenuItemClick}>CONTACT</Link></li>
      </ul>
      {
        isMobile && (
          <div className='mobile' onClick={toggleMenu}>
            {isOpen ? (
              <img src={closeMenu} alt="close menu" className='close-menu' />
            ) : (
              <img src={openMenu} alt="open menu" className='open-menu' />
            )}
          </div>
        )
      }
    </nav>
  );
}
