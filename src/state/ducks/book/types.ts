export type BookGroupingCategoryT =
  | "year"
  | "writer"
  | "artist"
  | "owner"
  | "random";

type BookGroupingCategoryMap<T> = { [category in BookGroupingCategoryT]: T };

export interface IBook extends BookGroupingCategoryMap<string | number> {
  name: string;
  slug?: string;
  writer: string;
  artist: string;
  publication: string;
  owner: string;
  rating: number;
  image: string;
  summary: string;
  year: number;
}

export type BookStateT = {
  books?: IBook[];
  isLoading: boolean;
  error?: string;
};

export enum BookActionTypes {
  GET_BOOKS = "@@book/GET_BOOKS",
  GET_BOOKS_SUCCESS = "@@book/GET_BOOKS_SUCCESS",
  GET_BOOKS_ERROR = "@@book/GET_BOOKS_ERROR",
  GET_FILTERED_BOOKS = "@@book/GET_FILTERED_BOOKS",
  GET_FILTERED_BOOKS_SUCCESS = "@@book/GET_FILTERED_BOOKS_SUCCESS",
  GET_FILTERED_BOOKS_ERROR = "@@book/GET_FILTERED_BOOKS_ERROR"
}
