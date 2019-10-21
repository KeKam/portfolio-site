import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  color: white;
  background-color: rgba(0, 0, 0, 0.897);
  font-family: 'Lato', Arial, sans-serif;
  text-align: center;
`;

const Title = styled.h1`
  margin-top: 0;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);

  @media (min-width: 45rem) {
    top: 50%;
  }
`;

const Text= styled(Title)`
  top: 55%;
  margin-top: 1em;
`;

const HomeLink = styled(Link)`
  display: block;
  margin-top: 1em;
`;

const NotFound = () => {
  return (
    <Wrapper>
      <Title>
        Page not found
      </Title>
      <Text as='p'>
        The page you are looking for does not exist.
        <HomeLink to='/#home'>Go back to home</HomeLink>
      </Text>
    </Wrapper>
  );
}

export default NotFound;