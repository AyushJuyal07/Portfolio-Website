import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {TbBrandLeetcode} from 'react-icons/tb'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/ayushjuyal26/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/AyushJuyal07" target='_blank'><FaGithub/></a>
        <a href="https://leetcode.com/AyushJuyal/" target='_blank'><TbBrandLeetcode/></a>
    </div>
  )
}

export default HeaderSocials