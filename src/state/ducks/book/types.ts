export type BookT = {
  name: string;
  writer: string;
  artist: string;
  publication: string;
  owner: string;
  rating: number;
  image: string;
  summary: string;
  year: number;
};

export type BookStateT = {
  books?: BookT[];
  isLoading: boolean;
  errors?: string[];
};

export enum BookActionTypes {
  GET_BOOKS = "@@book/GET_BOOKS",
  GET_BOOKS_SUCCESS = "@@book/GET_BOOKS_SUCCESS",
  GET_BOOKS_ERROR = "@@book/GET_BOOKS_ERROR",
  GET_FILTERED_BOOKS = "@@book/GET_FILTERED_BOOKS",
  GET_FILTERED_BOOKS_SUCCESS = "@@book/GET_FILTERED_BOOKS_SUCCESS",
  GET_FILTERED_BOOKS_ERROR = "@@book/GET_FILTERED_BOOKS_ERROR"
}
