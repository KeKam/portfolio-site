import styled from 'styled-components';

export const Toolbox = () => {};

Toolbox.Title = styled.h2`
  font-size: 1.6em;
  font-weight: 900;
`;

Toolbox.Text = styled.h3`
  font-size: 1.17em;
`;

Toolbox.Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2em;
  border-radius: 2em;
  box-sizing: border-box;
  background-color: rgba(46, 46, 46, 0.247);
`;

Toolbox.Logo = styled.div`
  width: 4.5em;
  margin: 0.5em;
`;