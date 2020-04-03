import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 53px;
  background: ${props => props.theme.footerBackground};
`;

const Footer: React.FC = () => {
  return <Wrapper></Wrapper>;
};

export default Footer;
