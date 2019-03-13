import React from 'react';
import contactData from '../../data/contacts.json';

const Contact = () => {
  return (
    <section id='contact' className='section'>
      <h2 className='text-center'>CONTACT</h2>
      <div className='section-content'>
        {contactData.map(contact => (
          <div className="" key={contact.url}>
            <a
              href={contact.url}
              target="_blank"
              title={`External link to my ${contact.name} account`}
              className=""
              rel="noopener noreferrer"
            >
              <i
                className={`fa fa-${contact.icon}`}
                alt={`External link to my ${contact.name} account`}
              />
            </a>
          </div>
        ))} 
      </div>
    </section>
  );
}

export default Contact;