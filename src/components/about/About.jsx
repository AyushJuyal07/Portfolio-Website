import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        {/* <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div> */}
        <div className="about__content">
          {/* <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div> */}

          <p align = "justify"> 
          Greetings! I am a passionate full stack developer, equipped with a comprehensive skill set that spans both front-end and back-end technologies. My mission is to bring ideas to life by crafting seamless and dynamic digital experiences. With a strong foundation in coding, problem-solving, and user-centric design, I am dedicated to creating innovative and user-friendly applications that make a lasting impact. Whether it's shaping the visual appeal or ensuring the robust functionality of a project, I thrive on the complete development cycle and am excited to contribute my expertise to the ever-evolving world of technology.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About