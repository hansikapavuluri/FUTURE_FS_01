import React from 'react'
import '../styles/about.css'
import profile from "../assets/p.png"



const About = () => {
  return (
    <section className='about-section' id="about">
      <div className='about-overlay'></div>
        <div className='container reveal'>
          <img className="profile" src={profile}/>
          <div className='about-me'>
            <h2>About <span>Me</span></h2>
            <div className='paragraphs'>
              <p>
                Hi, I’m Hansika — an aspiring Full Stack Developer passionate about
                 building modern, responsive, and creative web applications. I’m
                  currently focused on the MERN stack (MongoDB, Express.js, React, Node.js),
                   where I combine clean design with powerful functionality. My journey began
                    with HTML, CSS, and JavaScript, and has grown into exploring advanced concepts 
                    like React components and 3D UI effects.
              </p>
              <p>
                I believe in learning by building. Every project I create helps me sharpen 
                my skills and reflect my growth as a developer. My goal is to craft applications
                 that are not only technically strong but also engaging and user‑friendly, while
                  showcasing my creativity through interactive portfolio projects.
              </p>
            </div>
        </div>
        
        </div>
      

    </section>
  )
}

export default About