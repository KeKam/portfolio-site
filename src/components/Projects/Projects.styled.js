import styled from 'styled-components';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
  height: 27em;
  display: block;
  margin-top: 2.5em;
  border: thin solid rgba(0, 0, 0, 0);
  border-radius: 5px;
  background-color: rgba(238, 238, 238, 0.048);
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
`;

Projects.ImageContainer = styled.div`
  height: 50%;
  overflow: hidden;
  border-bottom: 0.2em solid black;
`;

Projects.Image = styled(Img)`
  width: 100%;
  height: 100%;
  border-radius: 5px 5px 0 0;
  transition: all 1.5s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

Projects.InfoContainer = styled.div`
  max-width: 20em;
  max-height: 13.5em;
  position: absolute;
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
  margin-top: 3em;
  float: right;
  transition: all 0.5s ease;
  position: relative;

  &:hover {
    color: grey;
    transform: scale(1.2);
  }
`;