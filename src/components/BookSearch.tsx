import React, { ChangeEvent, MouseEvent, useState, useCallback } from "react";
import styled from "styled-components";
import { Input } from "../utils/styled.components";
import { ReactComponent as Icon } from "../assets/SVG/Search Icon.svg";
import debounce from "lodash.debounce";

const Wrapper = styled.div`
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const SearchInputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const SearchIconButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 0;
  outline: none;
  cursor: pointer;
`;

const SearchIcon = styled(Icon)`
  width: 40px;

  @media (min-width: 768px) {
    width: 28px;
  }
`;

const SearchInput = styled(Input)`
  width: 100%;
  padding: 10px 50px 10px;
  border: 2px solid #777;
  border-radius: 8px;
  font-size: 16px;
  color: #cccccc;
  background-color: transparent;

  ::placeholder {
    color: #5a5a5a;
  }

  @media (min-width: 768px) {
    padding: 16px 60px 16px;
    border: 3px solid #777;
    font-size: 20px;
  }
`;

export type BookSearchPropsT = {
  onSearch: (term: string) => void;
};

const BookSearch: React.FC<BookSearchPropsT> = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const delayedSearch = useCallback(
    debounce((term: string) => onSearch(term), 500),
    []
  );

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    delayedSearch(e.target.value);
  };

  const handleSearch = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    onSearch(e.currentTarget.value);
  };

  return (
    <Wrapper>
      <SearchInputWrapper>
        <SearchIconButton title="Search books" onClick={handleSearch}>
          <SearchIcon title="" />
        </SearchIconButton>
        <SearchInput value={value} onChange={handleInputChange} />
      </SearchInputWrapper>
    </Wrapper>
  );
};

export default BookSearch;
