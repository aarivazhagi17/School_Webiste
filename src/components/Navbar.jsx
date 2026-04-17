  import React, { useState, useEffect } from 'react'
  import { Link } from 'react-router-dom'
  import KidsDream from '../image/KidsDream.jpg'
  import './Navbar.css'

  function Navbar() {

    const [active, setActive] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    // FIX: useEffect use பண்ணணும்
    useEffect(() => {
      const timer = setTimeout(() => {
        setActive(true);
      }, 1000);

      return () => clearTimeout(timer);
    }, []);

    return (
      <div className='Navbar'>
        <div className='nav-container'>

          {/* Logo */}
          <span className='logo'>
            <img className='nav-image' src={KidsDream} alt="" />
            Star Kids
          </span>

          {/* Hamburger */}
          <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>

          {/* Menu */}
          <ul
            className={`nav-links ${menuOpen ? "active" : ""}`}
            
          >
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/admission">Admission</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

        </div>
      </div>
    )
  }

  export default Navbar