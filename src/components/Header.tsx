import React from "react";
import styled from "styled-components";
import Logo from "../assets/PNG/Logo.png";
import { Container } from "../utils/styled.components";
import { NavLink } from "react-router-dom";

const HeaderWrapper = styled.div`
  width: 100%;
  height: 73px;
  background: ${props => props.theme.headerBackground};
`;

const HeaderInner = styled(Container)`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LogoLink = styled(NavLink)`
  display: block;
  outline: none;
  padding: 10px 10px 10px 0;
`;

const LogoImg = styled.img`
  max-width: 100%;
`;

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <HeaderInner>
        <LogoLink to="/">
          <LogoImg src={Logo} />
        </LogoLink>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;
