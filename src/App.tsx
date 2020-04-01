import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/" component={HomeContainer} />
      </Switch>

      <Footer />
    </>
  );
};

export default App;
