import React from 'react'
import "./App.css"
import { useEffect } from 'react'

import Preload from "./components/Preload.jsx"
import Navigation from "./components/Navigation.jsx"
import Hero from "./components/Hero.jsx"
import Skills from './components/Skills.jsx'
import Projects from "./components/Projects.jsx"
import About from "./components/About.jsx"
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"



const App = () => {
  useEffect(()=>{
    const revealElement = document.querySelectorAll(".reveal");
    const handlescroll = ()=>{
      revealElement.forEach((el)=>{
      const top=el.getBoundingClientRect().top;
      if(top<window.innerHeight-100){
        el.classList.add("active");
      }
    });
    };
    window.addEventListener("scroll",handlescroll);
    return ()=>window.removeEventListener("scroll",handlescroll);

  },[])
  
  return (
    <div>
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact /> 
        <Footer />
    </div>
  )
}

export default App