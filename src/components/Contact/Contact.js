import React from 'react';
import contactData from '../../data/contacts.json';
import { SharedStyles as SS } from '../SharedStyles/SharedStyles';
import { Contact as S } from './Contact.styled';

const Contact = () => {
  return (
    <SS.Section id='contact'>
      <SS.SectionContent>
        <S.Title>Contact</S.Title>
        <S.Text>Have any questions? Feel free to contact me!</S.Text>
        <S.Line />
        <S.ContactContainer>
          {contactData.map(contact => (
            <S.Item key={contact.url}>
              <S.Link
                href={contact.url}
                target='_blank'
                title={`Link to my ${contact.name} account`}
                rel='noopener noreferrer'
              >
                <S.ContactIcon
                  icon={[`${contact.prefix}`, `${contact.icon}`]}
                  alt={`Link to my ${contact.name} account`}
                />
                <S.IconText>{contact.name}</S.IconText>
              </S.Link>
            </S.Item>
          ))}
        </S.ContactContainer>
      </SS.SectionContent>
    </SS.Section>
  );
};

export default Contact;
