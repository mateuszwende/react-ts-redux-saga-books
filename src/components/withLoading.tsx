import React from "react";
import LoadingSpinner from "./LoadingSpinner";

export type WithLoadingPropsT = {
  isLoading: boolean;
};

const withLoading = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P & WithLoadingPropsT> => ({ isLoading, ...props }) =>
  isLoading ? <LoadingSpinner /> : <Component {...(props as P)} />;

export default withLoading;
