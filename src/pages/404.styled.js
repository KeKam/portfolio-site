import styled from 'styled-components';
import { Link } from 'gatsby';

export const NotFound = () => {};

NotFound.Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  color: white;
  background-color: rgba(0, 0, 0, 0.897);
  font-family: 'Lato', Arial, sans-serif;
  text-align: center;
`;

NotFound.Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

NotFound.Title = styled.h1`
  margin-top: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

NotFound.Text= styled(NotFound.Title)`
  top: 55%;
  margin-top: 1em;
`;

NotFound.Link = styled(Link)`
  display: block;
  margin-top: 1em;
`;