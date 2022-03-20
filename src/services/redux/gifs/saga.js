import {
  takeEvery,
  call,
  put,
  all,
  fork,
} from 'redux-saga/effects';
import * as TYPES from './types';
import * as Api from '../../api/gifs';
import { formatFromApi } from '../../../models/Media/utils';

export function* getGifsThroughApi({ payload }) {

  try {
    const response = yield call(Api.getGifs, payload);

    if (response.status === 200) {

      const { data: { data, pagination } } = response;
      const gifList = data.map((d) => formatFromApi(d));

      yield put({ type: TYPES.GET_GIFS_SUCCESS, payload: { count: pagination.count, total: pagination.total_count, list: gifList } });
    } else {
      yield put({ type: TYPES.GET_GIFS_ERROR, payload: response });
    }
  } catch (error) {
    yield put({ type: TYPES.GET_GIFS_ERROR, payload: error });
  }
}

export function* searchGifsThroughApi({ payload }) {

  try {
    const response = yield call(Api.searchGifs, payload);

    if (response.status === 200) {

      const { data: { data, pagination } } = response;
      const gifList = data.map((d) => formatFromApi(d));

      yield put({ type: TYPES.SEARCH_GIFS_SUCCESS, payload: { count: pagination.count, total: pagination.total_count, list: gifList } });
    } else {
      yield put({ type: TYPES.SEARCH_GIFS_ERROR, payload: response });
    }
  } catch (error) {
    yield put({ type: TYPES.SEARCH_GIFS_ERROR, payload: error });
  }
}

/* WATCHERS */

export function* watcherGetGifs() {
  yield takeEvery('GET_GIFS_REQUEST', getGifsThroughApi);
}

export function* watcherSearchGifs() {
  yield takeEvery('SEARCH_GIFS_REQUEST', searchGifsThroughApi);
}

export default function* rootSaga() {
  yield all([
    fork(watcherGetGifs),
    fork(watcherSearchGifs),
  ]);
}
