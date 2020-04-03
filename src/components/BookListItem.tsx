import React from "react";
import { IBook } from "../state/ducks/book/types";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const WrapperLink = styled(NavLink)`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  margin: 30px;
  width: calc(100% - 60px);
  cursor: pointer;

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
  color: ${props => props.theme.mainTextColor};
  word-wrap: wrap;
`;

const OwnerText = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.secondaryTextColor};
  word-wrap: wrap;
`;

const OwnerNameText = styled.span`
  font-weight: 600;
  color: ${props => props.theme.mainTextColor};
`;

export type BookListItemPropsT = {
  book: IBook;
  url: string;
};

const BookListItem: React.FC<BookListItemPropsT> = ({ book, url }) => {
  return (
    <WrapperLink to={url}>
      <ImgWrapper>
        <Img src={book.image} alt="Book image" />
      </ImgWrapper>
      <NameText>{book.name}</NameText>
      <OwnerText>
        Owned By <OwnerNameText>{book.owner}</OwnerNameText>
      </OwnerText>
    </WrapperLink>
  );
};

export default BookListItem;
