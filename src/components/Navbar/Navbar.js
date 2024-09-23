import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  }, [])
  return (
    <nav className={`container ${sticky ? 'dark-nav' : ""}`}>
      <img className='logo' src={logo} alt="" />
      <ul>
        <a href="#hero">
          <li>Home</li>
          <li>Home</li>
        </a>
        <a href="#programs">
          <li>Programs</li>
        </a>
        <a href="#about">
          <li>About us</li>
        </a>
        <a href="#campus">
          <li>Campus</li>
        </a>
        <li>Testimonials</li>
        <li><button className='btn'>Contact us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar