import styled from 'styled-components';
import Scrollschor from 'react-scrollchor';

export const NavBar= () => {};

NavBar.Bar= styled.nav`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 3.5em;
  background-color: ${props => props.hasScrolledDown ? 'rgba(0, 0, 0, 0.9)' : 'transparent'};
  transition: all 1s ease;
`;

NavBar.List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
  padding: 0;
`;

NavBar.Item = styled.li`
  font-size: 1em;
  font-weight: 900;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.2);
  }

  @media (min-width: 45rem) {
    font-size: 1.2em;
  }
`;

NavBar.Link= styled(Scrollschor)`
  color: white;
  text-decoration: none;
  transition: all 0.5s ease;

  &:hover {
    color: grey;
    text-decoration: none;
  }
`;