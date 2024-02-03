// import { useLocation } from 'react-router-dom';
"use client"
import {usePathname} from 'next/navigation';
import {
  ContactList,
  ContactListItem,
  ContactListLink,
  NavList,
  NavListLink,
  SidebarBox,
  SocialsList,
  SocialsListItem,
  SidebarContainer,
  TikTok,
  ContactListItemPhone,
} from './Sidebar.styled';
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export const Sidebar = () => {
  const location = usePathname();


  return (
    <SidebarContainer>
      <SidebarBox>
        <NavList>
          <NavListLink
            className={`link ${location === '/' ? 'active' : ''}`}
            href="/"
            aria-label="Home"
          >
            Home
          </NavListLink>
          <NavListLink
            className={`link ${location === '/about' ? 'active' : ''}`}
            href="/about"
            aria-label="About"
          >
            About
          </NavListLink>
          <NavListLink
            className={`link ${
              location === '/services' ? 'active' : ''
            }`}
            href="/services"
            aria-label="Services"
          >
            Services
          </NavListLink>
          <NavListLink
            className={`link ${
              location === '/projects' ? 'active' : ''
            }`}
            href="/projects"
            aria-label="Projects"
          >
            Projects
          </NavListLink>
          <NavListLink
            className={`link ${
              location === '/contact' ? 'active' : ''
            }`}
            href="/contact"
            aria-label="Contact"
          >
            Contact
          </NavListLink>
        </NavList>
        <ContactList>
          <ul>
            <ContactListItemPhone>
              <ContactListLink href="tel:+380959309876">
                +38 095 930 98 76
              </ContactListLink>

              <ContactListLink href="tel:+4368110541148">
                +43 681 10541148
              </ContactListLink>
            </ContactListItemPhone>

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
                <FaTelegram width="20" height="20"/>
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
        </ContactList>
      </SidebarBox>
    </SidebarContainer>
  );
};
