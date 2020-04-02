import { createAsyncAction } from "typesafe-actions";
import { BookActionTypes, IBook } from "./types";

export const getBooksAsync = createAsyncAction(
  BookActionTypes.GET_BOOKS,
  BookActionTypes.GET_BOOKS_SUCCESS,
  BookActionTypes.GET_BOOKS_ERROR
)<undefined, IBook[], string>();

export const getFilteredBooksAsync = createAsyncAction(
  BookActionTypes.GET_FILTERED_BOOKS,
  BookActionTypes.GET_FILTERED_BOOKS_SUCCESS,
  BookActionTypes.GET_FILTERED_BOOKS_ERROR
)<string, IBook[], string>();
