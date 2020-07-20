import React from 'react';
import Toolbox from '../Toolbox/Toolbox';
import { SharedStyles as SS } from '../SharedStyles/SharedStyles';
import { About as S } from './About.styled';

const About = ({ portraitImg }) => {
  return (
    <SS.Section id='about'>
      <SS.SectionContent>
        <S.ImageContainer>
          <S.Image
            alt='Image of Kenta'
            fluid={portraitImg.childImageSharp.fluid}
          />
        </S.ImageContainer>
        <S.Title>About Me</S.Title>
        <S.Text>
          Hello, I'm Kenta and my journey as a self-taught developer started in
          2018 when I realized that my interest and passion involved
          programming. The idea that you can build something that can be
          accessed anywhere in the world from a wide variety of devices was what
          really amazed and brought me on this path.
        </S.Text>
        <S.Text>
          During this journey I've been using different online resources such as{' '}
          <a
            href='https://udemy.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Udemy
          </a>{' '}
          and{' '}
          <a
            href='https://frontendmaster.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Frontend Masters
          </a>{' '}
          to gain knowledge and experience in different technologies and modern
          standards. If I'm not coding, I'm reading about code cause it's the
          fullfilling feeling of always learning that truly makes programming
          the choice for me.
        </S.Text>
        <SS.Line />
        <Toolbox />
      </SS.SectionContent>
    </SS.Section>
  );
};

export default About;
