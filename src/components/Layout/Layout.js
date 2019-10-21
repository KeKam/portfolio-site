import React from "react"
import { Layout as S } from './Layout.styled';

export default ({ children }) => {
  return (
    <div id='home'>
      <S.GlobalStyle />
      {children}
    </div>
  );
}

