import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Contact = () => {};

Contact.Title = styled.h2`
  font-size: 1.3em;
  font-weight: 900;
  text-align: center;

  @media (min-width: 45rem) {
    font-size: 1.6m;
  }
`;

Contact.Text = styled.h3`
  font-size: 1em;
  text-align: center;

  @media (min-width: 45rem) {
    font-size: 1.17em;
  }
`;

Contact.Line = styled.hr`
  display: block;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  margin-inline-start: auto;
  margin-inline-end: auto;
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgb(255, 255, 255), rgba(0, 0, 0, 0));
`;

Contact.ContactContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

Contact.Item = styled.div`
  width: 3.5em;
  margin: 1em;
  text-align: center;
  transition: all 0.5s ease;

  &:hover {
    color: grey;
    transform: scale(1.2);
  }

  @media (min-width: 45rem) {
    width: 4.5em;
  }
`;

Contact.Link = styled.a`
  color: white;
  text-decoration: none;
  transition: all 0.5s ease;

  &:hover {
    color: grey;
  }
`;

Contact.ContactIcon = styled(FontAwesomeIcon)`
  font-size: 1.5em;

  @media (min-width: 45rem) {
    font-size: 2em;
  }
`;

Contact.IconText = styled(Contact.Text)`
  font-size: 1em;
  text-align: center;
  margin: 0;

  @media (min-width: 45rem) {
    font-size: 1.17em;
  }
`;