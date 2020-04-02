import React from "react";
import styled from "styled-components";

const ErrorMsg = styled.p`
  font-size: 20px;
  color: #fafafa;
`;

export type WithErrorPropsT = {
  error?: string;
};

const withError = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P & WithErrorPropsT> => ({ error, ...props }) =>
  error ? <ErrorMsg>{error}</ErrorMsg> : <Component {...(props as P)} />;

export default withError;
