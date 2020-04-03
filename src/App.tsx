import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./containers/NotFound";
import BookDetailsContainer from "./containers/BookDetailsContainer";
import { useDispatch } from "react-redux";
import { getBooksAsync } from "./state/ducks/book/actions";
import { Container } from "./utils/styled.components";
import styled from "styled-components";

const AppWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  padding-bottom: 53px;
`;

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksAsync.request());
  }, [dispatch]);

  return (
    <AppWrapper>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route
            path="/books/category/:categoryName"
            component={HomeContainer}
          />
          <Route path="/book/:slug" component={BookDetailsContainer} />
          <Route path="/404" component={NotFound} />
          <Route render={() => <Redirect to="/404" />} />
        </Switch>
      </Container>

      <Footer />
    </AppWrapper>
  );
};

export default App;
