"use client"
import { useEffect, useState } from 'react';
import { MobileMenu } from '../Sidebar/MobileMenu/MobileMenu';
import { MobileMenuBox } from '../Sidebar/MobileMenu/MobileMenu.styled';
import { Header, Logo, LogoBox, HeaderSvg } from './Header.styled';



export const HeaderComp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState('true');
  const [scrollPos, setScrollPos] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = currentScrollPos < scrollPos;

      (isScrollingUp || currentScrollPos === 0) ? setVisible('true'): setVisible('false');
      setScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPos]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <Header $isvisible={visible}>

      <LogoBox href="/" aria-label="logo company">
        <Logo>Brand maze</Logo>
      </LogoBox>
      <div style={{display:'flex',justifyContent:'end', position:'relative',width:'100%'}}>
      </div>
      <HeaderSvg width="24" height="24" onClick={toggleMenu}/>
      <MobileMenuBox className={`collapsed ${isOpen ? 'is-expanded' : ''}`}>
        <MobileMenu
          isOpen={isOpen}
          toggleMenu={toggleMenu}
          setIsOpen={setIsOpen}
        />
      </MobileMenuBox>
    </Header>

    </>
  );
};
