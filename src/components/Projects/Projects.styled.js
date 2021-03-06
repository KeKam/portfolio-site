import styled from 'styled-components';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Projects = () => {};

Projects.Title = styled.h2`
  text-align: center;
  font-size: 1.3em;
  font-weight: 900;

  @media (min-width: 45rem) {
    font-size: 1.6em;
  }
`;

Projects.Text = styled.h3`
  text-align: center;
  font-size: 1em;

  @media (min-width: 45rem) {
    font-size: 1.17em;
  }
`;

Projects.Showcase = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

Projects.Item = styled.div`
  width: 20em;
  height: 21em;
  margin-top: 2.5em;
  border-radius: 5px;
  background-color: rgba(238, 238, 238, 0.048);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
`;

Projects.ImageContainer = styled.div`
  height: 45%;
  overflow: hidden;
  border-bottom: 0.2em solid black;
`;

Projects.Image = styled(Img)`
  border-radius: 5px 5px 0 0;

  &:hover {
    transform: scale(1.1);
    transition: transform 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;

Projects.InfoContainer = styled.div`
  max-width: 20em;
  max-height: 13.5em;
  position: relative;
  color: white;
  padding: 0 1em;
  width: 100%;
  word-wrap: break-word;
`;

Projects.Name = styled.h3`
  display: block;
  font-size: 1.17em;
`;

Projects.Description = styled.h4`
  font-size: 0.85em;
  margin: 0 1em 0 0;
  position: absolute;
`;

Projects.GitHubContainer = styled.div`
  display: absolute;
  font-size: 0.67em;
  font-weight: bold;
`;

Projects.Link = styled.a`
  font-size: 2em;
`;

Projects.GitHub = styled(FontAwesomeIcon)`
  font-size: 3em;
  color: white;
  float: right;
  transition: all 0.5s ease;
  position: absolute;
  top: 120px;
  right: 10px;

  &:hover {
    color: grey;
    transform: scale(1.2);
  }
`;
