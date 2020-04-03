import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { IApplicationState } from "../state/ducks";
import GoBack from "../components/GoBack";
import BookDetails from "../components/BookDetails";
import BookListBlock from "../components/BookListBlock";
import _ from "lodash";
import { BreakLine } from "../utils/styled.components";

const Wrapper = styled.div`
  padding: 20px 0;
`;

type ParamsType = {
  slug: string;
};

const BookDetailsContainer: React.FC = () => {
  const params = useParams<ParamsType>();

  const { books, isLoading, error } = useSelector(
    ({ book }: IApplicationState) => book
  );

  const book = useMemo(
    () => books && books.find(book => book.slug === params.slug),
    [params, books]
  );

  const randomBooks = books && _.sampleSize(books, 4);

  return (
    <Wrapper>
      <GoBack text="Back to collection" />
      <BookDetails book={book} isLoading={isLoading} error={error} />
      <BreakLine />
      <BookListBlock groupName="Other Random Books" books={randomBooks} />
    </Wrapper>
  );
};

export default BookDetailsContainer;
