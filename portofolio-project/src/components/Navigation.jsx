import React from 'react'
import "../styles/Navigation.css"
const Navigation = () => {
  return (
    <nav className='nav-bar'>
        <div className='icon'>
            <h1>Hansika</h1>
        </div>
        <ul className='links'>
            <a href="#home"><li>Home</li></a>
            <a href="#about"><li>About</li></a>
            <a href="#skills"><li>Skills</li></a>
            <a href="#projects"><li>Projects</li></a>
            <a href="#contact"><li>Contact</li></a>
            </ul>
        <button className='hire-btn' onClick={()=>{window.open( "https://mail.google.com/mail/?view=cm&fs=1&to=hansikapavuluri4446@gmail.com&su=Hiring%20Inquiry&body=Hi%20Hansika,%20we%20would%20like%20to%20discuss%20an%20opportunity.",
    "_blank")}}>Hire Me</button>
        
    </nav>
  )
}

export default Navigation