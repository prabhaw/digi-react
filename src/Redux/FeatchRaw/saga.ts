import { takeLatest, put, call } from "redux-saga/effects";
import { fetchEnd, fetchStart, fetchSuccess } from "./action";
import { ResponseGenerator } from "./interface";
import fetchDataService from "./service";
import { REQUEST_FETCH } from "./types";

export function* fetchchRawDatas() {
  try {
    yield put(fetchStart());
    const response: ResponseGenerator = yield call(fetchDataService);
    yield put(fetchSuccess(response.data));
  } catch (err) {
  } finally {
    yield put(fetchEnd());
  }
}

export function* fetchWatcher() {
  yield takeLatest(REQUEST_FETCH, fetchchRawDatas);
}

export default fetchWatcher;
