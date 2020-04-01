import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";
import { Action, TypeConstant, PayloadAction } from "typesafe-actions";

export interface IApplicationState {}

export interface IReducerAction<TPayload>
  extends Action<TypeConstant>,
    PayloadAction<TypeConstant, TPayload> {}

export const rootReducer = combineReducers<IApplicationState>({});

export function* rootSaga() {
  yield all([]);
}
