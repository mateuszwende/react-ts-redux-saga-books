import { all, call, put, fork, takeLatest } from "redux-saga/effects";
import { IBook, BookActionTypes } from "./types";
import { getBooksAsync, getFilteredBooksAsync } from "./actions";
import { IReducerAction } from "..";
import apiCaller from "../../utils/apiHelper";
import createSlug from "../../utils/createSlug";

const isResArrBooksType = (o: object): o is IBook[] => true;

const createResponseBookWithSlug = (res: IBook[]) =>
  res.map(item => ({
    ...item,
    slug: createSlug(item.name)
  }));

function* handleGetBooks() {
  try {
    let res: IBook[] | any = yield call(apiCaller, "GET", `/comics`);

    if (isResArrBooksType(res)) {
      const resWithSlug = createResponseBookWithSlug(res);
      yield put(getBooksAsync.success(resWithSlug));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(getBooksAsync.failure(err.message!));
    } else {
      yield put(getBooksAsync.failure("An unknown error occured."));
    }
  }
}

function* handleGetFilteredBooks(action: IReducerAction<string>) {
  try {
    const res: IBook[] | any = yield call(
      apiCaller,
      "GET",
      `/comics/?q=${action.payload}`
    );

    if (isResArrBooksType(res)) {
      const resWithSlug = createResponseBookWithSlug(res);
      yield put(getFilteredBooksAsync.success(resWithSlug));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(getFilteredBooksAsync.failure(err.message!));
    } else {
      yield put(getFilteredBooksAsync.failure("An unknown error occured."));
    }
  }
}

function* watchGetBooksRequest(): Generator {
  yield takeLatest(BookActionTypes.GET_BOOKS, handleGetBooks);
}

function* watchGetFilteredBooksRequest(): Generator {
  yield takeLatest(BookActionTypes.GET_FILTERED_BOOKS, handleGetFilteredBooks);
}

/**
 * @desc saga init, forks in effects, other sagas
 */
export default function* bookSaga() {
  yield all([fork(watchGetBooksRequest), fork(watchGetFilteredBooksRequest)]);
}
