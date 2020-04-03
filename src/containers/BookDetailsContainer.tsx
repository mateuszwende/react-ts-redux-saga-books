import React, { useMemo } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { IApplicationState } from "../state/ducks";
import withError from "../components/withError";
import withLoading from "../components/withLoading";
import GoBack from "../components/GoBack";
import BookDetails from "../components/BookDetails";

const Wrapper = styled.div`
  padding: 20px 0;
`;

type ParamsType = {
  slug: string;
};

const BookDetailsContainer: React.FC = () => {
  const params = useParams<ParamsType>();
  const history = useHistory();

  const { books, isLoading, error } = useSelector(
    ({ book }: IApplicationState) => book
  );

  const book = useMemo(
    () => books && books.find(book => book.slug === params.slug),
    [params, books]
  );

  return (
    <Wrapper>
      <GoBack text="Back to collection" />
      <BookDetails book={book} isLoading={isLoading} error={error} />
    </Wrapper>
  );
};

export default withLoading(withError(BookDetailsContainer));
