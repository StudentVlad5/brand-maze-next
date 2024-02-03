import {
  ContactListItem,
  ContactListLink,
  SocialsList,
  SocialsListItem,
  TikTok,
} from '../Sidebar.styled';
import {
  ContactListMobile,
  HeaderSvgMobile,
  MobileBox,
  NavListMobile,
  NavListMobileItem,
} from './MobileMenu.styled';
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

// import { useLocation } from 'react-router';
import {useRouter} from 'next/navigation';
import { useEffect } from 'react';
import { Logo, LogoBox } from '@/components/Header/Header.styled';

export const MobileMenu = ({ isOpen, toggleMenu, setIsOpen }) => {
  const location = useRouter();

useEffect(()=>{
  if (isOpen) {
    document.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        setIsOpen(false);
      }
    });
    document.querySelector('body').style.overflow = 'hidden';
  } else {
    document.querySelector('body').style.overflow = 'visible';
  }
},[isOpen])


  return (
    <>
      <HeaderSvgMobile width="24" height="24" onClick={toggleMenu}/>
      {isOpen && (
        <MobileBox>
          <LogoBox href="/" aria-label="logo company">
            <Logo>Brand maze</Logo>
          </LogoBox>
          <NavListMobile>
            <NavListMobileItem
              className={`link ${location.pathname === '/' ? 'active' : ''}`}
              href="/"
              aria-label="Home"
              onClick={toggleMenu}
            >
              Home
            </NavListMobileItem>
            <NavListMobileItem
              className={`link ${
                location.pathname === '/about' ? 'active' : ''
              }`}
              href="/about"
              aria-label="About"
              onClick={toggleMenu}
            >
              About
            </NavListMobileItem>
            <NavListMobileItem
              className={`link ${
                location.pathname === '/services' ? 'active' : ''
              }`}
              href="/services"
              aria-label="Services"
              onClick={toggleMenu}
            >
              Services
            </NavListMobileItem>
            <NavListMobileItem
              className={`link ${
                location.pathname === '/projects' ? 'active' : ''
              }`}
              href="/projects"
              aria-label="Projects"
              onClick={toggleMenu}
            >
              Projects
            </NavListMobileItem>
            <NavListMobileItem
              className={`link ${
                location.pathname === '/contact' ? 'active' : ''
              }`}
              href="/contact"
              aria-label="Contact"
              onClick={toggleMenu}
            >
              Contact
            </NavListMobileItem>
          </NavListMobile>
          <ContactListMobile>
            <ul>
              <li>
                <ContactListLink href="tel:+380959309876">
                  +38 095 930 98 76
                </ContactListLink>
              </li>
              <li>
                <ContactListLink href="tel:+4368110541148">
                  +43 681 105 41 148
                </ContactListLink>
              </li>

              <ContactListItem>
                <ContactListLink href="mailto:brandmaze.info@gmail.com">
                brandmaze.info@gmail.com
                </ContactListLink>
              </ContactListItem>
            </ul>

            <SocialsList>
              <SocialsListItem>
                <a
                  href="https://instagram.com/brand.maze?igshid=MzRlODBiNWFlZA=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram width="20" height="20"/>
                </a>
              </SocialsListItem>
              <SocialsListItem>
                <a
                  href="https://t.me/brandmaze"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTelegram width="22" height="22"/>
                </a>
              </SocialsListItem>
              <SocialsListItem>
                <a
                  href="https://www.tiktok.com/@brand.maze?_t=8du33OG9NJN&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TikTok />
                </a>
              </SocialsListItem>
              <SocialsListItem>
                <a
                  href="https://www.linkedin.com/company/brand-maze/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin width="20" height="20"/>
                </a>
              </SocialsListItem>
            </SocialsList>
          </ContactListMobile>
        </MobileBox>
      )}
    </>
  );
};
