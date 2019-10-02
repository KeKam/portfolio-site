import React from 'react';
import { NotFound as S } from './404.styled';

const NotFound = () => {
  return (
    <S.Wrapper>
      <S.Title>
        Page not found
      </S.Title>
      <S.Text as='p'>
        The page you are looking for does not exist.
        <S.Link to='/#home'>Go back to home</S.Link>
      </S.Text>
    </S.Wrapper>
  );
}

export default NotFound;