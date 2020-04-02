import React, { MouseEvent, useState, useEffect } from "react";
import { BookGroupingCategoryT } from "../state/ducks/book/types";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 15px 0;
`;

const Button = styled.button`
  margin: 8px;
  padding: 8px 20px;
  border: 0;
  font-size: 18px;
  color: #777777;
  background: transparent;
  cursor: pointer;
  transition: 0.15s all ease-in-out;
  outline: none;
  border-radius: 19px;
  text-transform: capitalize;

  &.active {
    color: #fff;
    background: #f15454;
    box-shadow: 0px 2px 3px rgba(34, 34, 34, 0.6);
  }
`;

const isGroupingCategory = (s: any): s is BookGroupingCategoryT => true;

export type GroupingCategoryListPropsT = {
  readonly categories?: BookGroupingCategoryT[];
  readonly currentCategory: BookGroupingCategoryT;
  readonly onChangeCategory: (category: BookGroupingCategoryT) => void;
};

const GroupingCategoryList: React.FC<GroupingCategoryListPropsT> = ({
  categories,
  currentCategory,
  onChangeCategory
}) => {
  const [activeCategory, setActiveCategory] = useState<BookGroupingCategoryT>(
    currentCategory
  );

  useEffect(() => {
    onChangeCategory(activeCategory);
  }, [onChangeCategory, activeCategory]);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isGroupingCategory(e.currentTarget.dataset.category)) {
      setActiveCategory(e.currentTarget.dataset.category);
    }
  };

  const isActive = (category: BookGroupingCategoryT) => {
    return category === activeCategory ? "active" : "";
  };

  return (
    <Wrapper>
      {categories &&
        categories.map((category, key) => (
          <Button
            key={key}
            onClick={handleClick}
            className={isActive(category)}
            data-category={category}
          >
            {category}
          </Button>
        ))}
    </Wrapper>
  );
};

export default GroupingCategoryList;
