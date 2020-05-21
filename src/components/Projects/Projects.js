import React from 'react';
import projectData from '../../data/projects.json';
import { SharedStyles as SS } from '../SharedStyles/SharedStyles';
import { Projects as S } from './Projects.styled';

const Projects = ({ projectImages }) => {
  return (
    <SS.Section id='projects'>
      <SS.SectionContent>
        <S.Title>Projects</S.Title>
        <S.Text>
          Below you can find some of my projects that I've been working on.
        </S.Text>
        <SS.Line />
        <S.Showcase>
          {projectData.map((project) => {
            const image = projectImages.find((n) => {
              return n.node.relativePath === `projects/${project.img}`;
            });
            const imageFluid = image.node.childImageSharp.fluid;
            return (
              <S.Item key={project.url}>
                <a
                  href={project.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  title='Link to project'
                >
                  <S.ImageContainer>
                    <S.Image
                      title={project.name}
                      alt='Screenshot of the project'
                      fluid={imageFluid}
                    />
                  </S.ImageContainer>
                </a>
                <S.InfoContainer>
                  <S.Name>{project.name}</S.Name>
                  <S.Description>{project.description}</S.Description>
                  <S.GitHubContainer>
                    <a
                      href={project.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      title='Link to github repository'
                    >
                      <S.GitHub icon={['fab', 'github']} alt='Github icon' />
                    </a>
                  </S.GitHubContainer>
                </S.InfoContainer>
              </S.Item>
            );
          })}
        </S.Showcase>
      </SS.SectionContent>
    </SS.Section>
  );
};

export default Projects;
