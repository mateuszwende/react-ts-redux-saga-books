import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { ReactComponent as BackIcon } from "../assets/SVG/Back Icon.svg";

const Button = styled.button`
  margin: 8px 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  transition: 0.15s all ease-in-out;
  outline: none;
`;

const ButtonText = styled.span`
  font-size: 20px;
  color: ${props => props.theme.linkTextColor};
  margin: 0 8px;

  &:hover {
    text-decoration: underline;
  }
`;

export type GoBackPropsT = {
  text: string;
};

const GoBack: React.FC<GoBackPropsT> = ({ text }) => {
  const history = useHistory();

  return (
    <Button onClick={history.goBack}>
      <BackIcon />
      <ButtonText>{text}</ButtonText>
    </Button>
  );
};

export default GoBack;
