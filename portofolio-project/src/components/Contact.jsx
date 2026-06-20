import React, { useState } from 'react'
import "../styles/contact.css"
const Contact = () => {
  const [formDetails,setFormDetails] = useState({
    name:"",
    mail:"",
    message:"",
  });
  // const [dataSubmitted,setDataSubmitted] = useState(null);
  const [sentMessage,setSentMessage] = useState("");
  const handlechange = (event)=>{
    setFormDetails({...formDetails,[event.target.name]:event.target.value})
  }
  const handlesubmit = (e)=>{
    e.preventDefault();
    console.log("Form submitted!!");
    setSentMessage(`Thank You ${formDetails.name}, Your message has been sent!`);
    setFormDetails(
    {
      name:"",
      mail:"",
      message:"",
    });
    setTimeout(() => {
      setSentMessage("");
    }, 2000);
    
  }
  return (
    <section className='contact-section' id="contact">
      <div className='contact-overlay'></div>
      <div className='contact-container reveal'>
          <div className='left'>
            <h3>Contact <span>Me</span></h3>
            <div className='links'>
              <a href="mailto:hansikapavuluri446@gmail.com"><i className="fa-solid fa-paper-plane" style={{ color: "#fff" }}></i>hansikapavuluri@gmail.com</a>
            <a href="tel:1234567890"><i className="fa-solid fa-phone" style={{ color: "#fff" }}></i>0123456789
 </a>
            </div>
            <div className='logos'>
              <i className="fa-brands fa-linkedin" style={{ color: "#fff" }}></i>
              <i className="fa-brands fa-github" style={{ color: "#fff" }}></i>
              <i className="fa-brands fa-instagram" style={{ color: "#fff" }}></i>
            </div>
          </div>
          <form onSubmit={handlesubmit} className='right '>
            <input 
              type="text" 
              name = "name"
              value={formDetails.name}
              placeholder='Your Name' 
              required
              onChange={handlechange}
            />
            <input 
              type="email" 
              name = "mail"
              value={formDetails.mail}
              placeholder='Your Gmail' 
              required
              onChange={handlechange}

            />
            <textarea 
              name="message"
              value={formDetails.message}
              placeholder='Enter Message' 
              required
              onChange={handlechange}
            ></textarea>
            <button type='submit'>Submit</button>
            {sentMessage && <p className="success-msg">{sentMessage}</p>}
          </form>
       
          
      </div>

    </section>
  )
}

export default Contact