import React from 'react';
import Img from 'gatsby-image';
import projectData from '../../data/projects.json';
import './Projects.css';

const Projects = ({ projectImages }) => {
  return (
    <section id='projects' className='section'>
      <h2 className='text-center'>PROJECTS</h2>
      <div className='section-content'>
        <div className='project-showcase'>
          {projectData.map(project => {
            const image = projectImages.find(n => {
              return n.node.relativePath === `projects/${project.img}`;
            });
            const imageFluid = image.node.childImageSharp.fluid;
            return (
              <a
                href={project.url}
                key={project.url}
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
                <div className='project-info'>
                  <h3>{project.name}</h3>
                  <h4>{project.description}</h4>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;