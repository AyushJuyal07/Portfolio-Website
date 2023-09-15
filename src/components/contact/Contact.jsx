import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6iwvrtu', 'template_ziej8f8', form.current, 'pzRFTJdvAdFsp9689')
    e.target.reset()
    };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>ayushjuyal26@gmail.com</h5>
            <a href="mailto:ayushjuyal26@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <BsFillTelephoneFill className='contact__option-icon'/>
            <h4>Number</h4>
            <h5>+91 9832521906</h5>
            <a href="tel:+919832521906" target='_blank'>Send a message</a>
          </article>

        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" id="" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div> 


    </section>
  )
}

export default Contact