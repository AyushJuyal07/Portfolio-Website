import React, { useRef, useState} from 'react'
import './nav.css'
import { FaBars, FaTimes } from "react-icons/fa"


// const Nav = () => {
//   const [activeNav, setActiveNav] = useState('#')
//   const [ham, setHam] = useState(false)

//   return (
//     <nav className={ham ? "nav" : ""}>
//       <a href="#" onClick = {() => setActiveNav('#')} className={activeNav === '#' ? 'active' : '' }>Home</a>
//       <a href="#about" onClick = {() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : '' }>About</a>
//       <a href="#experience" onClick = {() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : '' }>Skills</a>
//       {/* <a href="#services" onClick = {() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : '' }><RiServiceLine/></a> */}
//       <a href="#contact" onClick = {() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : '' }>Projects</a>
//       <div className="hamburgerIcon" onClick={() => setHam(!ham)}><GiHamburgerMenu /></div>
//     </nav>

//   )
// }


const Nav = () => {

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  const hideNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");

  }

  const [show, setShow] = useState(false);


  return  (
    <div className='con-tent'>
      <h3>Healthyfi<span>Me</span></h3>
      <nav ref={navRef}>
        <a href="#" onClick={hideNavbar}>Home</a>
        <a href="#about" onClick={hideNavbar}>About</a>
        <a href="#experience" onClick={hideNavbar}>Skills</a>
        <a href="#portfolio" onClick={hideNavbar}>Projects</a>
        <a href="#contact" onClick={hideNavbar}>Contact</a>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className='nav-btn' onClick={showNavbar}>
        <FaBars />
      </button>
    </div>

  )
}

export default Nav