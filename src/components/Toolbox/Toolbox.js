import React from 'react';
import Logos from '../../images/logos/logos';
import { Toolbox as S } from './Toolbox.styled';

const Toolbox = () => {
  return (
    <section>
      <S.Title>
        Toolbox
      </S.Title>
      <S.Text>
        My goal as a developer is to create projects with modern user experiences that are simple, but still achieves the desired functionality.
      </S.Text>
      <S.Text>
        Below you can find some of the technologies and tools that I have encountered and used during my journey and I always look forward to encounter and learn even more.
      </S.Text>
      <S.Container>
        {Logos.map(Logo => {
          return (
            <S.Logo key={Logo.id}>
              <S.Image src={Logo.src} alt={Logo.alt} />
            </S.Logo>
          )
        })}
      </S.Container>
    </section>
  );
}

export default Toolbox;