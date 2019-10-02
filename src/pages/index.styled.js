import styled, { createGlobalStyle } from 'styled-components';

export const HomePage = () => {};

HomePage.GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    @import url('https://fonts.googleapis.com/css?family=Lato:400,900&display=swap');
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    color: white;
    background-color: rgba(0, 0, 0, 0.897);
    font-family: 'Lato', Arial, sans-serif;
  }
`;

HomePage.Line = styled.hr`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: auto;
  margin-inline-end: auto;
  border: 0;
  height: 4px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgb(255, 255, 255), rgba(0, 0, 0, 0));
`;