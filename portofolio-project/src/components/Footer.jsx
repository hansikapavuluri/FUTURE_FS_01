import React from 'react'
import "../styles/footer.css"   
const Footer = () => {
  return (
    <section className='footer-section'>
      <div className='footer-container'>
        <p>&copy; {new Date().getFullYear()} Hansika Pavuluri. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://instagram.com/your-instagram" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Footer