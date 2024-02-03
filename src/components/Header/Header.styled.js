import { keyframes, styled } from "styled-components";
import { MdOutlineMenu } from "react-icons/md";

const fadeInTopAnimation = keyframes`
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Header = styled.header`
  color: black;
  background-color: transparent;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  width: 100%;

  @media screen and (max-width: 1279.9px) {
    width: 100%;
    height: 45px;
    opacity: ${props => {props.$isvisible === "true" ? 1 : 0}};
    transition: opacity 0.3s, transform 0.3s;
    z-index: 500;
  }
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;

export const Logo = styled.p`
  color: black;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  text-transform: uppercase;
  text-decoration: none;
  animation: ${fadeInTopAnimation} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  position: absolute;
  font-size: 25px;
  letter-spacing: -1.2px;

  cursor: pointer;
  text-decoration: none;
  margin-top: 20px;
  margin-left: 20px;

  @media screen and (min-width: 1280px) {
    position: fixed;
    font-size: 45px;
    letter-spacing: -3.2px;
    /* margin-top: 0;
    margin-left: 0; */
  }
`;

export const LogoBox = styled.a`
  text-decoration: none;
  cursor: pointer;
  z-index: 999;
`;

export const HeaderSvg = styled(MdOutlineMenu)`
  fill: currentColor;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  animation: ${fadeInTopAnimation} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
