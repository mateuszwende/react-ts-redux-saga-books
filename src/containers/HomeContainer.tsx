import React, { useEffect, useCallback } from "react";
import CustomComponent from "../components/CustomComponent";
import { useDispatch } from "react-redux";
import {
  getBooksAsync,
  getFilteredBooksAsync
} from "../state/ducks/book/actions";
import BookSearch from "../components/BookSearch";
import { Container } from "../utils/styled.components";

const HomeContainer: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksAsync.request());
  }, []);

  const filterBooks = useCallback(
    (term: string) => dispatch(getFilteredBooksAsync.request(term)),
    [dispatch]
  );

  return (
    <Container>
      <BookSearch onSearch={filterBooks} />
      <CustomComponent
        title="Starter boilerplate"
        subtitle="React, Redux, Saga, Typescript"
      />
    </Container>
  );
};

export default HomeContainer;
