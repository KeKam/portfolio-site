import styled from 'styled-components';

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
    color: grey;
    text-decoration: none;
    font-style: italic;
  }

  @media (min-width: 45rem) {
    font-size: 1.17em;
    line-height: 30px;
  }
`;