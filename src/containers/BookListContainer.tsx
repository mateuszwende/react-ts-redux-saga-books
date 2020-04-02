import React, { useMemo, useCallback } from "react";
import { IBook, BookGroupingCategoryT } from "../state/ducks/book/types";
import _ from "lodash";
import withLoading from "../components/withLoading";
import withError from "../components/withError";
import BookListBlock from "../components/BookListBlock";

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

  const groupName = useCallback(
    (book: IBook, category: BookGroupingCategoryT): string => {
      for (const key in book) {
        if (key === category) {
          return book[key].toString();
        }
      }
      return "";
    },
    []
  );

  return (
    <div>
      {groupedBooks &&
        groupedBooks.map((groupItem, key) => {
          return (
            <BookListBlock
              key={key}
              groupName={groupName(groupItem[0], groupingCategory)}
              books={groupItem}
            />
          );
        })}
    </div>
  );
};

export default withLoading(withError(BookListContainer));
