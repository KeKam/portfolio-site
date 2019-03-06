import React from 'react';
import projectData from '../../data/projects.json';

const Projects = () => {
  return (
    <section id='projects' className='section'>
      <h2 className='text-center'>PROJECTS</h2>
      <div>
        <div>
          {projectData.map(project => {
            return (
              <a
                href={project.url}
                key={project.url}
                className=''
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className=''>
                  {/* Image goes here */}
                </div>
                <div className=''>
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