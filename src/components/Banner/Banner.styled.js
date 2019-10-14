import styled from 'styled-components';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Scrollschor from 'react-scrollchor';

export const Banner = () => {};


Banner.Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: black;
  position: relative;
`;

Banner.Overlay = styled.div`
  background: black;
  opacity: 0.5;
  width: 100%;
  height: 100%;
`;

Banner.Image = styled(Img)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

Banner.Header = styled.div`
  width: 80%;
  margin: 0;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

Banner.Title = styled.h1`
  font-size: 2.3em;
  font-weight: 900;
  color: white;

  @media (min-width: 45rem) {
    font-size: 3.2em;
  }
`;

Banner.Line = styled.hr`
  display: block;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  margin-inline-start: auto;
  margin-inline-end: auto;
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgb(255, 255, 255), rgba(0, 0, 0, 0));
`;

Banner.SubTitle = styled.p`
  font-size: 1.5em;
  font-weight: 900;
  color: white;

  @media (min-width: 45rem) {
    font-size: 2em;
  }
`;

Banner.ArrowContainer = styled.div`
  position: absolute;
  display: block;
  left: 50%;
  bottom: 0;
  margin-left: -50px;
  width: 100px;
  box-sizing: border-box;
  text-align: center;
`;

Banner.Link = styled(Scrollschor)`
  display: inline-block;
`;

Banner.Arrow = styled(FontAwesomeIcon)`
  color: white;
  margin-bottom: 0.1em;
  font-size: 2.5em;
  padding: 0;
  width: 100%;
  transition: all 0.5s ease;

  &:hover {
    color: grey;
    transform: scale(1.2);
  }

  @media (min-width: 45rem) {
    font-size: 3.2em;
  }
`;