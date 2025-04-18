import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpeg'
import IMG2 from '../../assets/portfolio2.jpeg'
// import IMG3 from '../../assets/portfolio3.jpeg'
import IMG4 from '../../assets/portfolio4.jpeg'
import IMG5 from '../../assets/portfolio5.jpeg'
import IMG6 from '../../assets/portfolio6.jpeg'
// import IMG4 from '../../assets/portfolio4.jpg'
// import IMG5 from '../../assets/portfolio5.png'
// import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
      <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>NextGenStore</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/AyushJuyal07/eCommerce-Website" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/AyushJuyal07/eCommerce-Website" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Healthy Food with Millets Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://diet-application.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>News Web Application</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/AyushJuyal07/News-Feed-Website" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/AyushJuyal07/News-Feed-Website" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>CRUD Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/AyushJuyal07/CRUD-Website" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/AyushJuyal07/CRUD-Website" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Quiz Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/AyushJuyal07/C-language-Quiz-Website" className='btn' target='_blank'>Github</a>
            <a href="https://ayushjuyal07.github.io/C-language-Quiz-Website/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        




        {/* <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Drum Kit</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/AyushJuyal07/Drum-Kit" className='btn' target='_blank'>Github</a>
            <a href="https://ayushjuyal07.github.io/Drum-Kit/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article> */}

        {/* <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article> */}


      </div>

    </section>
  )
}

export default Portfolio