import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeContainer} />
    </Switch>
  );
};

export default App;
