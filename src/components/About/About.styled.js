import styled from 'styled-components';
import Img from 'gatsby-image';

export const About = () => {};

About.Title = styled.h2`
  display: block;
  font-size: 1.3em;
  font-weight: 900;

  @media (min-width: 45rem) {
    font-size: 1.6em;
  }
`;

About.Text = styled.h3`
  display: block;
  font-size: 1em;
  line-height: 25px;

  a {
    color: #bebebe;
    text-decoration: none;
    font-style: italic;
  }

  @media (min-width: 45rem) {
    font-size: 1.17em;
    line-height: 30px;
  }
`;

About.ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

About.Image = styled(Img)`
  width: 100%;
  height: 100%;
  border-radius: 40px;
  filter: saturate(150%);

  @media (min-width: 45rem) {
    width: 65%;
    height: 65%;
    margin-bottom: 2em;
  }
`;
