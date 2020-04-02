import { TypeConstant, Action, PayloadAction } from "typesafe-actions";
import { BookStateT, IBook, BookActionTypes } from "./types";
import { ApiErrorsT } from "..";

const initialBookState: BookStateT = {
  isLoading: false,
  error: undefined
};

export const bookReducer = (
  state: BookStateT = initialBookState,
  action: Action<TypeConstant> &
    PayloadAction<TypeConstant, IBook[] & ApiErrorsT & string>
): BookStateT => {
  switch (action.type) {
    case BookActionTypes.GET_BOOKS: {
      return { ...initialBookState, isLoading: true };
    }
    case BookActionTypes.GET_BOOKS_SUCCESS: {
      return { ...state, isLoading: false, books: action.payload };
    }
    case BookActionTypes.GET_BOOKS_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }
    case BookActionTypes.GET_FILTERED_BOOKS: {
      return { ...initialBookState, isLoading: true };
    }
    case BookActionTypes.GET_FILTERED_BOOKS_SUCCESS: {
      return { ...state, isLoading: false, books: action.payload };
    }
    case BookActionTypes.GET_FILTERED_BOOKS_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }
    default: {
      return { ...state };
    }
  }
};
