import React, { useMemo } from "react";
import { IBook, BookGroupingCategoryT } from "../state/ducks/book/types";
import _ from "lodash";
import withLoading from "../components/withLoading";
import withError from "../components/withError";

export type BookListContainerPropsT = {
  books?: IBook[];
  groupingCategory: BookGroupingCategoryT;
  isLoading: boolean;
  errors?: string[];
};

const BookListContainer: React.FC<BookListContainerPropsT> = ({
  books,
  groupingCategory
}) => {
  const groupedBooks = useMemo(() => {
    const grpBooks = _(books)
      .groupBy(groupingCategory)
      .toPairs()
      .sortBy(kvArray => kvArray[0])
      .map(kvArray => kvArray[1])
      .value();

    return groupingCategory === "year" ? grpBooks.reverse() : grpBooks;
  }, [books, groupingCategory]);

  const getKeyValByGroupCategory = (
    book: IBook,
    category: BookGroupingCategoryT
  ): number | string => {
    for (const key in book) {
      if (key === category) {
        return book[key];
      }
    }
    return "";
  };

  return (
    <div>
      {groupedBooks &&
        groupedBooks.map((groupItem, key) => {
          return (
            <div key={key}>
              <p>{getKeyValByGroupCategory(groupItem[0], groupingCategory)}</p>
              <ul>
                {groupItem.map((childItem, key) => (
                  <li key={key}>{childItem.name}</li>
                ))}
              </ul>
            </div>
          );
        })}
    </div>
  );
};

export default withLoading(withError(BookListContainer));
