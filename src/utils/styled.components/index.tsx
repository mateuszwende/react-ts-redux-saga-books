import styled from "styled-components";

export const Container = styled.div`
  max-width: 1920px;
  padding: 0 15px;
  margin: 0 auto;
`;

export const Input = styled.input`
  padding: 8px;
  border-radius: 0;
  border: 1px solid #000;
  outline: none;
  color: #000;
`;

export const Img = styled.img`
  display: block;
  max-width: 100%;
  width: auto;

  @media (min-width: 576px) {
    width: 100%;
  }
`;

export const BreakLine = styled.div`
  border: 1px solid ${props => props.theme.seperateLineBorderColor};
  margin: 15px 0;
`;
