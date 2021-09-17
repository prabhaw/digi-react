import { all } from "redux-saga/effects";
import fetchWatcher from "./FeatchRaw/saga";

function* rootSaga() {
  yield all([fetchWatcher()]);
}

export default rootSaga;
