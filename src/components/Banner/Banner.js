import React from 'react';
import { Banner as S } from './Banner.styled';

const Banner = ({ bannerImg }) => {
  return (
    <S.Wrapper>
      <S.Overlay>
        <S.Image
          title='Banner image'
          alt='Image of a laptop'
          fluid={bannerImg.childImageSharp.fluid}
        />
      </S.Overlay>
      <S.Header>
        <S.Title>
          Kenta Kamimura
        </S.Title>
        <S.Line />
        <S.SubTitle>
          Web Developer
        </S.SubTitle>
      </S.Header>
      <S.ArrowContainer>
        <S.Link to='#about' aria-label='Jump to about section' animate={{ duration: 600 }} className='arrow-button'>
          <S.Arrow icon={['fas', 'angle-double-down']}/>
        </S.Link>
      </S.ArrowContainer>
    </S.Wrapper>
  );
}

export default Banner; 