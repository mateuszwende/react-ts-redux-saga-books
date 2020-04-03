import React from "react";
import { IBook } from "../state/ducks/book/types";
import styled from "styled-components";
import BookListItem from "./BookListItem";

const Wrapper = styled.div`
  padding: 20px 0;
  border-bottom: 2px solid ${props => props.theme.seperateLineBorderColor};
  &:last-child {
    border-bottom: none;
  }
`;
const GroupName = styled.div`
  padding: 8px 0;
`;

const GroupNameText = styled.p`
  font-size: 32px;
  margin: 0;
  color: ${props => props.theme.titleTextColor};
`;

const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 0 -30px;

  @media (min-width: 576px) {
    margin: 0 -15px;
  }

  @media (min-width: 768px) {
    margin: 0 -30px;
  }

  @media (min-width: 992px) {
    margin: 0 -60px;
  }
`;

export type BookListBlockPropsT = {
  groupName: string;
  books?: IBook[];
};

const BookListBlock: React.FC<BookListBlockPropsT> = ({ groupName, books }) => {
  return (
    <Wrapper>
      <GroupName>
        <GroupNameText>{groupName}</GroupNameText>
      </GroupName>
      <ItemsWrapper>
        {books &&
          books.map((item, key) => (
            <BookListItem key={key} book={item} url={`/book/${item.slug}`} />
          ))}
      </ItemsWrapper>
    </Wrapper>
  );
};

export default BookListBlock;
