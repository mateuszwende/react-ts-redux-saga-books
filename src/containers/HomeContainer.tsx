import React, { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredBooksAsync } from "../state/ducks/book/actions";
import BookSearch from "../components/BookSearch";
import { IApplicationState } from "../state/ducks";
import { BookGroupingCategoryT } from "../state/ducks/book/types";
import BookListContainer from "./BookListContainer";
import GroupingCategoryList from "../components/GroupingCategoryList";
import { useLocation, useParams, useHistory } from "react-router-dom";

/**
 * if categories would have came from API categories would be stored
 * in redux store.
 */
const groupingCategories: BookGroupingCategoryT[] = [
  "year",
  "writer",
  "artist",
  "owner",
  "random"
];

const isGroupingCategory = (s: any): s is BookGroupingCategoryT => {
  return groupingCategories.find(category => {
    return category === s;
  })
    ? true
    : false;
};

const isAtHomePath = (path: string) => path === "/";

type ParamTypes = {
  categoryName: BookGroupingCategoryT;
};

const HomeContainer: React.FC = () => {
  const params = useParams<ParamTypes>();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [groupingCategory, setGroupingCategory] = useState<
    BookGroupingCategoryT
  >(groupingCategories[0]);

  useEffect(() => {
    const { categoryName } = params;

    if (isAtHomePath(location.pathname)) {
      return;
    }

    if (isGroupingCategory(categoryName)) {
      setGroupingCategory(categoryName);
    } else {
      history.push("/404");
    }
  }, [params, location, history]);

  const { books, isLoading, error } = useSelector(
    ({ book }: IApplicationState) => book
  );

  const filterBooks = useCallback(
    (term: string) => dispatch(getFilteredBooksAsync.request(term)),
    [dispatch]
  );

  return (
    <>
      <BookSearch onSearch={filterBooks} />
      <GroupingCategoryList
        categories={groupingCategories}
        isInitial={isAtHomePath(location.pathname)}
      />
      <BookListContainer
        books={books}
        groupingCategory={groupingCategory}
        isLoading={isLoading}
        error={error}
      />
    </>
  );
};

export default HomeContainer;
