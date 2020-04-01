import React from "react";
import CustomComponent from "../components/CustomComponent";

const HomeContainer: React.FC = () => {
  return (
    <div className="home">
      <CustomComponent
        title="Starter boilerplate"
        subtitle="React, Redux, Saga, Typescript"
      />
    </div>
  );
};

export default HomeContainer;
