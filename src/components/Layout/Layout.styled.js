import { createGlobalStyle } from 'styled-components';

export const Layout = () => {};

Layout.GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:400,900&display=swap');
  
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    color: white;
    background-color: rgba(0, 0, 0, 0.897);
    font-family: 'Lato', Arial, sans-serif;
  }
`;
