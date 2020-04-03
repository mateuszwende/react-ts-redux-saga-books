import React from "react";
import { IBook } from "../state/ducks/book/types";
import styled from "styled-components";
import { ReactComponent as FullStar } from "../assets/SVG/Full star.svg";
import { ReactComponent as EmptyStar } from "../assets/SVG/Empty star.svg";

const Wrapper = styled.div`
  width: 100%;
  padding: 16px 0;

  display: grid;
  grid-gap: 10px;
  grid-template-columns: 100%;
  grid-template-rows: max-content;

  @media (min-width: 576px) {
    grid-gap: 25px;
    grid-template-columns: 40% auto;
  }

  @media (min-width: 768px) {
    grid-template-columns: 30% auto;
  }
  @media (min-width: 992px) {
    grid-template-columns: 25% auto;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 20% auto;
  }
`;

const ImageBox = styled.div`
  grid-column: 1;
  grid-row: 1 / 2;

  @media (min-width: 576px) {
    grid-row: 1 / 3;
  }
`;

const Img = styled.img`
  display: block;
  max-width: 100%;
  width: auto;

  @media (min-width: 576px) {
    width: 100%;
  }
`;

const Details = styled.div`
  grid-column: 1;
  grid-row: 2 / 3;

  @media (min-width: 576px) {
    grid-column: 2 / 3;
    grid-row: 1;
  }
`;

const DetailsSummary = styled.div`
  grid-column: 1;
  grid-row: 3 / 4;

  @media (min-width: 576px) {
    grid-column: 1 / 3;
    grid-row: 3 / 4;
  }

  @media (min-width: 768px) {
    grid-column: 2;
    grid-row: 2 / 3;
  }
`;

const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 0 16px;

  @media (min-width: 576px) {
    padding: 0 0 16px 0;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const Title = styled.h2`
  font-size: 32px;
  margin: 0;
  padding: 0;
  color: ${props => props.theme.titleTextColor};
`;

const Rating = styled.div`
  margin-left: 0;
  margin-top: 6px;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    margin-left: 28px;
  }
`;

const Star = styled.div`
  margin: 5px;
`;

const DetailsText = styled.p`
  font-size: 16px;
  text-align: justify;
  color: ${props => props.theme.mainTextColor};
`;

const DetailsTextLeft = styled.span`
  color: ${props => props.theme.secondaryTextColor};
`;

type BookDetailsPropsT = {
  book?: IBook;
  isLoading: boolean;
  error?: string;
};

const BookDetails: React.FC<BookDetailsPropsT> = ({ book }) => {
  const createStars = (ratingNum?: number) => {
    if (!ratingNum) {
      return;
    }

    let stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < ratingNum) {
        stars.push(
          <Star key={i}>
            <FullStar></FullStar>
          </Star>
        );
      } else {
        stars.push(
          <Star key={i}>
            <EmptyStar></EmptyStar>
          </Star>
        );
      }
    }
    return stars;
  };

  return (
    <Wrapper>
      <ImageBox>
        <Img src={book?.image} />
      </ImageBox>
      <Details>
        <TopWrapper>
          <Title>
            {book?.name} ({book?.year})
          </Title>
          <Rating>{createStars(book?.rating)}</Rating>
        </TopWrapper>
        <DetailsText>
          <DetailsTextLeft>Writer: </DetailsTextLeft>
          {book?.writer}
        </DetailsText>
        <DetailsText>
          <DetailsTextLeft>Artist: </DetailsTextLeft>
          {book?.artist}
        </DetailsText>

        <DetailsText>
          <DetailsTextLeft>Publication: </DetailsTextLeft>
          {book?.publication}
        </DetailsText>

        <DetailsText>
          <DetailsTextLeft>Owner: </DetailsTextLeft>
          {book?.owner}
        </DetailsText>
      </Details>
      <DetailsSummary>
        <DetailsText>{book?.summary}</DetailsText>
      </DetailsSummary>
    </Wrapper>
  );
};

export default BookDetails;
