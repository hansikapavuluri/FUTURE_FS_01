
import React, { useEffect, useRef, useState } from 'react'
import video from "../assets/video.mp4"
import "../styles/Hero.css"

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [displayText,setDisplayText] = useState("");
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        videoRef.current.muted=true;
      } else {
        videoRef.current.play();
        videoRef.current.muted = false; // unmute only after user clicks
      }
      setIsPlaying(!isPlaying);
    }
  };
    useEffect(() => {
    const text = "Full Stack Developer";
    let i = 0;
    let forward = true;

    const interval = setInterval(() => {
      if (forward) {
        setDisplayText(text.slice(0, i + 1));
        i++;
        if (i === text.length) {
          forward = false;
        }
      } else {
        setDisplayText(text.slice(0, i));
        i--;
        if (i === 0) {
          forward = true;
        }
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className='hero-section' id="home">
      <video 
        ref={videoRef} 
        src={video} 
        loop 
        playsInline
        className="background-video"
      ></video>

      <div className='overlay'></div> {/* corrected class name */}

      <div className='hero-content'>
        <h1 className='title'>Hi, I'm a <br /> <span>{displayText}</span>
        </h1>
        <p className='tagline'>
          I build fast, scalable Modern web applications using React, Node, and MongoDB
        </p>
        <div className='btns'>
          <button className='primary-btn' onClick={()=>{
            const section = document.getElementById("projects");
            section?.scrollIntoView({behavior:"smooth"});
          }}>View Projects</button>
          <button className='secondary-btn' onClick={()=>{window.open("public/Resume.pdf","_blank")}}>View Resume</button>
        </div>
      </div>
      <button className="control-btn" onClick={togglePlay}>
            {isPlaying ? <i class="fa-solid fa-circle-stop"></i>:<i class="fa-solid fa-circle-play"></i>}
      </button>
        
    </section>
  )
}

export default Hero
