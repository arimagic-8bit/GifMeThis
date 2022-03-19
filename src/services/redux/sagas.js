import { all } from 'redux-saga/effects';
import gifsSagas from './gifs/saga';

export default function* rootSaga() {
  yield all([
    gifsSagas(),
  ]);
}
