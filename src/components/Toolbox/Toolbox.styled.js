import styled from 'styled-components';

export const Toolbox = () => {};

Toolbox.Title = styled.h2`
  font-size: 1.3em;
  font-weight: 900;

  @media (min-width: 45rem) {
    font-size: 1.6em;
  }
`;

Toolbox.Text = styled.h3`
  font-size: 1em;
  line-height: 35px;

  @media (min-width: 45rem) {
    font-size: 1.17em;
    line-height: 30px;
  }
`;

Toolbox.Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2em;
  border-radius: 2em;
  box-sizing: border-box;
  background-color: rgba(45, 45, 45, 0.5);
`;

Toolbox.Logo = styled.div`
  width: 3.5em;
  margin: 0.25em;

  @media (min-width: 45rem) {
    width: 4.5em;
    margin: 0.5em;
  }
`;

Toolbox.Image = styled.img`
  width: 3.5em;
  height: 3.5em;

  @media (min-width: 45rem) {
    width: 4.5em;
    height: 4.5em;
  }
`;
