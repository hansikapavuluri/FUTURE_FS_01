import React from 'react'
import "../styles/projects.css"
import projectsData from "../Data/Data.json"

const Projects = () => {
  return (
    <section className='project-section' id="projects">
      <div className='project-overlay'></div>
      <div className='project-container reveal'>
        <h2 className='section-title'>Projects</h2>
        <div className='card-container'>
          <div className='card-grid'>
            {
              projectsData.map((project, index) => (
                <div className='card' key={index}>
                  <img src={project.image} alt={project.title} className='proj-preview'/>
                  <h3 className='proj-title'>{project.title}</h3>
                  <p className='proj-desc'>{project.description}</p>
                  
                  {/* Tech stack tags rendered dynamically */}
                  <div className='proj-tags'>
                    {project.techStack?.map((tech, i) => (
                      <span key={i} className='tag'>{tech}</span>
                    ))}
                  </div>

                  {/* Links with icons */}
                  <div className='proj-links'>
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                      </a>
                    )}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
