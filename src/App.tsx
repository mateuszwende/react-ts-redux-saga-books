import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./containers/NotFound";

const App: React.FC = () => {
  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/books/category/:categoryName" component={HomeContainer} />
        <Route path="/404" component={NotFound} />
        <Route render={() => <Redirect to="/404" />} />
      </Switch>

      <Footer />
    </>
  );
};

export default App;
