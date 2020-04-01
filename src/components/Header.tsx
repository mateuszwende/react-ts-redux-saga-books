import React from "react";
import styled from "styled-components";
import Logo from "../assets/PNG/Logo.png";
import { Container } from "../utils/styled.components";

const HeaderWrapper = styled(Container)`
  width: 100%;
  height: 73px;
  display: flex;
  align-items: center;
  background: #535353;
`;

const LogoLink = styled.a`
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
      <LogoLink href="/">
        <LogoImg src={Logo} />
      </LogoLink>
    </HeaderWrapper>
  );
};

export default Header;
