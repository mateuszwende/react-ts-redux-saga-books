import React from "react";
import styled, { keyframes } from "styled-components";

const keyframeSpin = keyframes`
  0% { transform: rotate(0deg);}
  100% { transform: rotate(360deg);}
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 70px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = styled.div`
  border: 7px solid #535353;
  border-radius: 50%;
  border-top: 7px solid #f15454;
  width: 70px;
  height: 70px;
  animation: ${keyframeSpin} 1.5s linear infinite;
`;

const LoadingSpinner: React.FC = () => {
  return (
    <Wrapper>
      <Spinner />
    </Wrapper>
  );
};

export default LoadingSpinner;
