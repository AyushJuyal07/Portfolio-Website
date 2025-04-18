import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
// import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>SOFTWARE DEVELOPER</h5>
        <h6>Hey, I'm Ayush Juyal, a software developer with a portfolio showcasing visually appealing and user-friendly websites. Let's bring your ideas to life!</h6>
        {/* <h6 className='text-light'>Fullstack Developer</h6> */}
        <div className="me">
          <img src={ME} alt="me" />

        </div>
        <CTA />
        {/* <HeaderSocials /> */}


        {/* <a href="#contact" className='scroll__down'>Scroll Down</a> */}

      </div>

    </header>
  )
}

export default Header