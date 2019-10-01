import React from 'react';
import Toolbox from '../Toolbox/Toolbox';
import { SharedStyles as SS } from '../SharedStyles/SharedStyles';
import { About as S } from './About.styled';

const About = () => {
  return (
    <SS.Section id='about'>
      <SS.SectionContent>
        <S.Title>
          About Me
        </S.Title>
        <S.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Nam at laoreet velit, sed dignissim turpis. Nunc tempor,
          nisi at eleifend suscipit, justo ante euismod purus,
          ac laoreet libero lectus ut mi. Curabitur quis sapien a purus bibendum posuere nec eu quam.
          Sed cursus facilisis eros et faucibus. Proin in lacinia nulla
          nec convallis tellus. Maecenas ut efficitur nunc,
        </S.Text>
        <SS.Line />
        <Toolbox />
      </SS.SectionContent>
    </SS.Section>
  );
}

export default About;