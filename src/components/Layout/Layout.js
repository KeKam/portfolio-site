import React from 'react';
import { Layout as S } from './Layout.styled';

export default ({ children }) => {
  return (
    <div>
      <S.GlobalStyle />
      {children}
    </div>
  );
};
