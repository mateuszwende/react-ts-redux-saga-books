import React from "react";
import { BookGroupingCategoryT } from "../state/ducks/book/types";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Wrapper = styled.div`
  padding: 15px 0;
`;

const NavLinkButton = styled(NavLink)`
  display: inline-block;
  margin: 8px 8px 8px 0;
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

export type GroupingCategoryListPropsT = {
  readonly categories?: BookGroupingCategoryT[];
  readonly isInitial: boolean;
};

const GroupingCategoryList: React.FC<GroupingCategoryListPropsT> = ({
  categories,
  isInitial
}) => {
  return (
    <Wrapper>
      {categories &&
        categories.map((category, key) => (
          <NavLinkButton
            key={key}
            to={`/books/category/${category}`}
            activeClassName="active"
            className={isInitial && key === 0 ? "active" : ""}
          >
            {category}
          </NavLinkButton>
        ))}
    </Wrapper>
  );
};

export default GroupingCategoryList;
