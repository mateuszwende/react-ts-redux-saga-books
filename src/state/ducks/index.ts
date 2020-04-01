import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";
import { Action, TypeConstant, PayloadAction } from "typesafe-actions";
import { bookReducer } from "./book/reducers";
import bookSaga from "./book/sagas";

export interface IApplicationState {}

export interface IReducerAction<TPayload>
  extends Action<TypeConstant>,
    PayloadAction<TypeConstant, TPayload> {}

export type ApiErrorsT = string[];

export const rootReducer = combineReducers<IApplicationState>({
  book: bookReducer
});

export function* rootSaga() {
  yield all([fork(bookSaga)]);
}
