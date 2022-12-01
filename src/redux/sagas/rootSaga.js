import { call, fork, put, spawn, takeEvery } from "redux-saga/effects";
import { getLatesNews, getPopularNews } from "../../api/getLatestNews";
import {
  hideError,
  increaseCount,
  setLatestNews,
  setLatestNewsError,
  setPopularNews,
  setPopularNewsError,
} from "../actions/actionsCreators";
import {
  DECREASE_COUNT,
  GET_LATEST_NEWS,
  GET_NEWS,
  INCREASE_COUNT,
} from "../types";

export function* handleLatestNews() {
  try {
    const { hits } = yield call(getLatesNews, "react");
    yield put(setLatestNews(hits));
  } catch (e) {
    yield put(setLatestNewsError("Error fetching latest news"));
  }
}

const delayHideError = (ms) => new Promise(res => setTimeout(res, ms*1000))

export function* handlePopularNews() {
  try {
    const { hits } = yield call(getPopularNews, "react");
    yield put(setPopularNews(hits));
  } catch (e) {
    yield put(setPopularNewsError("Error fetching popular news"));
		yield delayHideError(5)
    yield put(hideError())
  }
}

export function* handleNews() {
  yield fork(handleLatestNews);
  yield fork(handlePopularNews);
}

export function* watchClickSaga() {
  yield takeEvery(GET_NEWS, handleNews);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
