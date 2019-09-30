import styled from 'styled-components';
import Scrollschor from 'react-scrollchor';

export const NavBar= () => {};

NavBar.Bar= styled.nav`
  position: fixed;
  padding-top: 10px;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 50px;
  background-color: ${props => props.hasScrolledDown ? 'rgba(48, 48, 48, 0.973)' : 'transparent'};
  transition: all 1s ease;
`;

NavBar.List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
`;

NavBar.Item = styled.li`
  font-size: 1.2em;
  font-weight: 900;
`;

NavBar.Link= styled(Scrollschor)`
  color: white;

  &:active {
    color: grey;
  }

  &:hover {
    color: grey;
    text-decoration: none;
    transition: all 0.5s ease;
  }
`;