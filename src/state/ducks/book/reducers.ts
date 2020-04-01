import { TypeConstant, Action, PayloadAction } from "typesafe-actions";
import { BookStateT, BookT, BookActionTypes } from "./types";
import { ApiErrorsT } from "..";

const initialBookState: BookStateT = {
  isLoading: false
};

export const bookReducer = (
  state: BookStateT = initialBookState,
  action: Action<TypeConstant> &
    PayloadAction<TypeConstant, BookT[] & ApiErrorsT>
): BookStateT => {
  switch (action.type) {
    case BookActionTypes.GET_BOOKS: {
      return { ...state, isLoading: true };
    }
    case BookActionTypes.GET_BOOKS_SUCCESS: {
      return { ...state, isLoading: false, books: action.payload };
    }
    case BookActionTypes.GET_BOOKS_ERROR: {
      return { ...state, isLoading: false, errors: action.payload };
    }
    case BookActionTypes.GET_FILTERED_BOOKS: {
      return { ...state, isLoading: true };
    }
    case BookActionTypes.GET_FILTERED_BOOKS_SUCCESS: {
      return { ...state, isLoading: false, books: action.payload };
    }
    case BookActionTypes.GET_FILTERED_BOOKS_ERROR: {
      return { ...state, isLoading: false, errors: action.payload };
    }
    default: {
      return { ...state };
    }
  }
};
