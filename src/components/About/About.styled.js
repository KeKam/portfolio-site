import styled from 'styled-components';

export const About = () => {};

About.Title = styled.h2`
  display: block;
  font-size: 1.6em;
  font-weight: 900;
`;

About.Text = styled.h3`
  display: block;
  font-size: 1.17em;
  line-height: 30px;

  a {
    color: grey;
    text-decoration: none;
    font-style: italic;
  }
`;