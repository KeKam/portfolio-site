import React from 'react';
import Img from 'gatsby-image';
import projectData from '../../data/projects.json';
import './Projects.css';

const Projects = (props) => {
  return (
    <section id='projects' className='section'>
      <h2 className='text-center'>PROJECTS</h2>
      <div className='section-content'>
        <div className='project-showcase'>
          {projectData.map(project => {
            const image = props.projectImages.find(n => {
              return n.node.relativePath === `projects/${project.img}`;
            });
            const imageSizes = image.node.childImageSharp.sizes;
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
                    sizes={imageSizes}
                    className='project-img center-block'
                  />
                </div>
                <div className='project-info'>
                  <h4>{project.name}</h4>
                  <p>{project.description}</p>
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