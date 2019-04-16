import React from 'react';
import contactData from '../../data/contacts.json';
import './Contact.css';

const Contact = () => {
  return (
    <section id='contact' className='section'>
      <div className='section-content'>
        <h2 className='text-center'>Contact</h2>
        <h3 className='text-center'>Have any questions? Feel free to contact me!</h3>
        <hr className='hr-sections' />
        <div className='contacts'>
          {contactData.map(contact => (
            <div className='contact-item' key={contact.url}>
              <a
                href={contact.url}
                target="_blank"
                title={`Link to my ${contact.name} account`}
                className='contact-link'
                rel="noopener noreferrer"
              >
                <i
                  className={`fa fa-${contact.icon} fa-2x`}
                  alt={`Link to my ${contact.name} account`}
                />
                <h3 className='icon-text'>{contact.name}</h3>
              </a>
            </div>
          ))} 
        </div>
      </div>
    </section>
  );
}

export default Contact;