import React, {useState} from 'react'
import webIcon from "../assets/dasurf.ico"
import openMenu from "../assets/menu.svg"
import closeMenu from "../assets/close.svg"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(prev => !prev);
  }

  return (
    <nav className={`nav ${isOpen ? "no-shadow" : ""}`}>
        <a data-aos="zoom-out" className='icon-section' href='./Navbar.jsx'>
            <img src={webIcon} alt="nav picture" />
            <h3>OLUWADAMILARE YUSUF</h3>
        </a>
        <ul className={`menu ${isOpen ? "show-menu" : ""}`} data-aos={!isOpen && "zoom-out"}>
            <li><a href='./Home.jsx'>HOME</a></li>
            <li><a href='./About.jsx'>ABOUT</a></li>
            <li><a href='./Projects.jsx'>PROJECTS</a></li>
            <li><a href='./Contact.jsx'>CONTACT</a></li>
        </ul>
        <div className='mobile' onClick={toggleMenu}>
          {
            isOpen
            ?
            <img src={closeMenu} alt="open-menu" className='close-menu'/>
            :
            <img src={openMenu} alt="close-menu" className='open-menu'/>
          }
        </div>
    </nav>
  )
}
