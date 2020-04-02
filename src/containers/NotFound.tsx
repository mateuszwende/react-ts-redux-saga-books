import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 120px 0 0 0;
`;

const NumberText = styled.p`
  font-size: 72px;
  color: #ccc;
  margin: 16px;
`;

const Text = styled.p`
  font-size: 22px;
  color: #ccc;
`;

const NotFound: React.FC = () => {
  const history = useHistory();
  return (
    <Wrapper>
      <NumberText>404</NumberText>
      <Text>There is nothing here.</Text>
      <a onClick={() => history.push("/")}>Go to Home</a>
    </Wrapper>
  );
};

export default NotFound;
