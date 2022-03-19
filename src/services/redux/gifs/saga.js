import {
  takeLatest,
  takeEvery,
  call,
  put,
  all,
  fork,
} from 'redux-saga/effects';
import * as TYPES from './types';
import * as Api from '../../api/gifs';

export function* getGifsThroughApi({ payload }) {
  console.log('payload', payload)
  try {
    const response = yield call(Api.getGifs, payload);

    if (response.status === 200) {
      yield put({ type: TYPES.GET_GIFS_SUCCESS, payload: response });
    } else {
      yield put({ type: TYPES.GET_GIFS_ERROR, payload: response });
    }
  } catch (error) {
    console.log('error', error)
    yield put({ type: TYPES.GET_GIFS_ERROR, payload: error });
  }
}

/* WATCHERS */

export function* watcherGetGifs() {
  yield takeEvery('GET_GIFS_REQUEST', getGifsThroughApi);
}

export default function* rootSaga() {
  yield all([
    fork(watcherGetGifs),
  ]);
}
