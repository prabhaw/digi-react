import { all } from "redux-saga/effects";
import fetchWatcher from "./FeatchRaw/saga";
import fetchSWatcher from "./sauce/sauce.saga";

function* rootSaga() {
  yield all([fetchWatcher(), fetchSWatcher()]);
}

export default rootSaga;
