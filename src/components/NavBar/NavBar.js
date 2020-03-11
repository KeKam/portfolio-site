import React, { useState, useEffect } from 'react';
import { NavBar as S } from './NavBar.styled';

const NavBar = () => {
  const [hasScrolledDown, setHasScrolledDown] = useState(false);

  const handleScroll = () => {
    const bodyScrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    let scrolledDown = bodyScrollTop > 75 ? true : false;
    setHasScrolledDown(scrolledDown);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  return (
    <S.Bar hasScrolledDown={hasScrolledDown}>
      <S.List>
        <S.Item>
          <S.Link to='#home' animate={{ duration: 800 }}>
            Home
          </S.Link>
        </S.Item>
        <S.Item>
          <S.Link to='#about' animate={{ duration: 800 }}>
            About
          </S.Link>
        </S.Item>
        <S.Item>
          <S.Link to='#projects' animate={{ duration: 800 }}>
            Projects
          </S.Link>
        </S.Item>
        <S.Item>
          <S.Link to='#contact' animate={{ duration: 800 }}>
            Contact
          </S.Link>
        </S.Item>
      </S.List>
    </S.Bar>
  );
};

export default NavBar;
