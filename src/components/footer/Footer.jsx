import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {TbBrandLeetcode} from 'react-icons/tb'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>AYUSH JUYAL</a>
      <ul className='premalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/ayushjuyal26/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/AyushJuyal07" target='_blank'><FaGithub/></a>
        <a href="https://leetcode.com/AyushJuyal/" target='_blank'><TbBrandLeetcode/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ayush Juyal. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer