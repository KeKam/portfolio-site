import React from 'react';
import Toolbox from '../Toolbox/Toolbox';

const About = () => {
  return (
    <section id='about' className='section'>
      <div className='section-content'>
        <div>
          <h2>About Me</h2>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nam at laoreet velit, sed dignissim turpis. Nunc tempor,
            nisi at eleifend suscipit, justo ante euismod purus,
            ac laoreet libero lectus ut mi. Curabitur quis sapien a purus bibendum posuere nec eu quam.
            Sed cursus facilisis eros et faucibus. Proin in lacinia nulla
            nec convallis tellus. Maecenas ut efficitur nunc,
          </h3>
        </div>
        <hr className='hr-sections' />
        <Toolbox />
      </div>
    </section>
  );
}

export default About;