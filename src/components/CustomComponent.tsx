import React from "react";

export type CustomComponentPropsT = {
  title?: string;
  subtitle: string;
};

const CustomComponent: React.FC<CustomComponentPropsT> = ({
  title,
  subtitle
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default CustomComponent;
