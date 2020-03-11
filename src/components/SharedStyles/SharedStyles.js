import styled from 'styled-components';

export const SharedStyles = {};

SharedStyles.Section = styled.section`
  padding-top: 12.5%;
  padding-bottom: 17%;
`;

SharedStyles.SectionContent = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: auto;
  padding-left: 1em;
  padding-right: 1em;
`;

SharedStyles.Line = styled.hr`
  display: block;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  margin-inline-start: auto;
  margin-inline-end: auto;
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgb(255, 255, 255),
    rgba(0, 0, 0, 0)
  );
`;
