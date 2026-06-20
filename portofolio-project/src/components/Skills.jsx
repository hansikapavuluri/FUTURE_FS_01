import React from 'react'
import "../styles/skills.css"
const Skills = () => {
  return (
    <section className='skill-section' id="skills">
        <div  className='skill-overlay'></div>
        <div className='skill-container reveal'>
            <h2 className='section-title'>Skills</h2>
            <div className='skillcontent'>
                <div className='skill-card one'>
                    <div className='symbol'>
                        <p><i class="fa-solid fa-code"></i></p>
                    </div>
                    <h3 className='skill-title'>HTML</h3>
                    <p className='skill-desc'>Defines the structure of web pages.
                        Forms the foundation of content.</p>
                </div>
                <div className='skill-card two'>
                    <div className='symbol'>
                        <p><i class="fa-brands fa-css3-alt"></i></p>
                    </div>
                    <h3 className='skill-title'>CSS</h3>
                    <p className='skill-desc'>Handles styling and layouts.
                        Adds colors, animations, responsiveness.</p>
                </div>
                <div className='skill-card three'>
                    <div className='symbol'>
                        <p><i class="fa-brands fa-js"></i></p>
                    </div>
                    <h3 className='skill-title'>JS</h3>
                    <p className='skill-desc'>Makes pages interactive.
                        Controls logic, events, and dynamic updates.</p>
                </div>
                <div className='skill-card four'>
                    <div className='symbol'>
                        <p><i class="fa-brands fa-react"></i></p>
                    </div>
                    <h3 className='skill-title'>REACT</h3>
                    <p className='skill-desc'>Component‑based UI library.
                        Efficient rendering with Virtual DOM.</p>
                </div>
 
            </div>
        </div>

    </section>
  )
}

export default Skills