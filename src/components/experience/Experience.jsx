import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Languages</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <BsFillPatchCheckFill className= 'experience__details-icons' />
              <div>
                <h4>C++</h4>
            
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className= 'experience__details-icons' />

              <div>
                <h4>Java</h4>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className= 'experience__details-icons' />
              <div>
                <h4>JavaScript</h4>
            
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className= 'experience__details-icons' />
              <div>
                <h4>Python</h4>
            
              </div>
            </article>


            <article className='experience__details'>
              <BsFillPatchCheckFill className= 'experience__details-icons' />
              <div>
                <h4>HTML</h4>
            
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className= 'experience__details-icons' />
              <div>
                <h4>CSS</h4>
            
              </div>
            </article>

          </div>

        </div>


                  {/* Tools */}

                  <div className="experience__backend">

<h3>Tools</h3>
  <div className="experience__content">


    <article className='experience__details'>
      <BsFillPatchCheckFill className= 'experience__details-icons' />
      <div>
        <h4>GitHub</h4>
        
      </div>
    </article>
    <article className='experience__details'>
      <BsFillPatchCheckFill className= 'experience__details-icons' />
      <div>
        <h4>Git</h4>
        
      </div>
    </article>

    <article className='experience__details'>
      <BsFillPatchCheckFill className= 'experience__details-icons' />
      <div>
        <h4>MongoDB</h4>
        
      </div>
    </article>
    <article className='experience__details'>
      <BsFillPatchCheckFill className= 'experience__details-icons' />
      <div>
        <h4>Figma</h4>
        
      </div>
    </article>

    <article className='experience__details'>
      <BsFillPatchCheckFill className= 'experience__details-icons' />
      <div>
        <h4>Photoshop</h4>
        
      </div>
    </article>

  </div>

</div>

        {/* END OF FRONTEND */}

        <div className="experience__backend">

        <h3>Frameworks</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <BsFillPatchCheckFill className= 'experience__details-icons' />
              <div>
                <h4>ReactJS</h4>
                
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className= 'experience__details-icons' />
              <div>
                <h4>NodeJS</h4>
                
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className= 'experience__details-icons' />
              <div>
                <h4>ExpressJS</h4>
                
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className= 'experience__details-icons' />
              <div>
                <h4>Tailwind css</h4>
                
              </div>
            </article>

          </div>
        </div>



        <div className="experience__backend">

        <h3>Operating System</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <BsFillPatchCheckFill className= 'experience__details-icons' />
              <div>
                <h4>Windows</h4>
                
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className= 'experience__details-icons' />
              <div>
                <h4>Linux</h4>
                
              </div>
            </article>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience