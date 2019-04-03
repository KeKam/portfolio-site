import React from 'react';
import Img from 'gatsby-image';
import projectData from '../../data/projects.json';
import './Projects.css';

const Projects = ({ projectImages }) => {
  return (
    <section id='projects' className='section'>
      <h2 className='text-center'>PROJECTS</h2>
      <h3 className='text-center'>Below you can find some of my projects that I've been working on.</h3>
      <div className='section-content'>
      <hr className='hr-sections' />
        <div className='project-showcase'>
          {projectData.map(project => {
            const image = projectImages.find(n => {
              return n.node.relativePath === `projects/${project.img}`;
            });
            const imageFluid = image.node.childImageSharp.fluid;
            return (
              <div key={project.url}>
                <a
                  href={project.url}
                  className='project'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <div className='project-img-container'>
                    <Img 
                      title={project.name}
                      alt='Screenshot of the project'
                      fluid={imageFluid}
                      className='project-img center-block'
                    />
                  </div>
                </a>
                <div className='project-info'>
                  <h3>{project.name}</h3>
                  <h4>{project.description}</h4>
                  <h6>
                    <a 
                    href={project.github}
                    className='project-github'
                    target='_blank' 
                    rel='noopener noreferrer'
                    >
                    <i
                      className='fa fa-github fa-lg'
                      alt='Github icon'
                    />
                      GitHub
                    </a>
                  </h6>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;