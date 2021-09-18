import { takeLatest, put, call } from "redux-saga/effects";
import { ResponseGenerator } from "./../FeatchRaw/interface";
import fetchDataService from "./service";
import Action, { Types } from "./sauce.action";

export function* fetchchRawDatas() {
  try {
    const response: ResponseGenerator = yield call(fetchDataService);
    yield put(Action.fetchSuccess(response.data));
  } catch (err) {
  } finally {
  }
}

export function* fetchSWatcher() {
  yield takeLatest(Types.FETCH_REQUEST, fetchchRawDatas);
}

export default fetchSWatcher;
