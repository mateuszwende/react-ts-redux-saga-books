import React from "react";
import { IBook } from "../state/ducks/book/types";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  margin: 30px;
  width: calc(100% - 60px);

  @media (min-width: 576px) {
    margin: 30px 15px;
    width: calc(50% - 30px);
  }

  @media (min-width: 768px) {
    margin: 30px 30px;
    width: calc(33.3333333% - 60px);
  }

  @media (min-width: 992px) {
    margin: 30px 60px;
    width: calc(25% - 120px);
  }
`;

const ImgWrapper = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

const Img = styled.img`
  width: 100%;
`;

const NameText = styled.p`
  margin: 8px 0 14px;
  font-size: 22px;
  font-weight: 600;
  color: #ccc;
  word-wrap: wrap;
`;

const OwnerText = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  color: #999;
  word-wrap: wrap;
`;

const OwnerNameText = styled.span`
  font-weight: 600;
  color: #ccc;
`;

export type BookListItemPropsT = {
  book: IBook;
};

const BookListItem: React.FC<BookListItemPropsT> = ({ book }) => {
  return (
    <Wrapper>
      <ImgWrapper>
        <Img src={book.image} alt="Book image" />
      </ImgWrapper>
      <NameText>{book.name}</NameText>
      <OwnerText>
        Owned By <OwnerNameText>{book.owner}</OwnerNameText>
      </OwnerText>
    </Wrapper>
  );
};

export default BookListItem;
