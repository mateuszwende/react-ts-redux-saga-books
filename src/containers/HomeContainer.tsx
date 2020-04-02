import React, { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBooksAsync,
  getFilteredBooksAsync
} from "../state/ducks/book/actions";
import BookSearch from "../components/BookSearch";
import { Container } from "../utils/styled.components";
import { IApplicationState } from "../state/ducks";
import { BookGroupingCategoryT } from "../state/ducks/book/types";
import BookListContainer from "./BookListContainer";
import GroupingCategoryList from "../components/GroupingCategoryList";

const groupingCategories: BookGroupingCategoryT[] = [
  "year",
  "writer",
  "artist",
  "owner",
  "random"
];

const HomeContainer: React.FC = () => {
  const dispatch = useDispatch();
  const [groupingCategory, setGroupingCategory] = useState<
    BookGroupingCategoryT
  >(groupingCategories[0]);

  useEffect(() => {
    dispatch(getBooksAsync.request());
  }, [dispatch]);

  const { books, isLoading, error } = useSelector(
    ({ book }: IApplicationState) => book
  );

  const filterBooks = useCallback(
    (term: string) => dispatch(getFilteredBooksAsync.request(term)),
    [dispatch]
  );

  const changeGroupingCategory = useCallback(
    (category: BookGroupingCategoryT) => {
      setGroupingCategory(category);
    },
    []
  );

  return (
    <Container>
      <BookSearch onSearch={filterBooks} />
      <GroupingCategoryList
        categories={groupingCategories}
        currentCategory={groupingCategory}
        onChangeCategory={changeGroupingCategory}
      />
      <BookListContainer
        books={books}
        groupingCategory={groupingCategory}
        isLoading={isLoading}
        error={error}
      />
    </Container>
  );
};

export default HomeContainer;
