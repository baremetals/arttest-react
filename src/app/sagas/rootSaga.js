import { all, fork } from "redux-saga/effects";


import userSagas from './handlers/handler.user';
import allUserDataSagas from './handlers/handler.allUserData';

export default function* rootSaga() {
  yield all([
    fork(userSagas),
    fork(allUserDataSagas)])
  // yield all(
  //   [...Object.values(userSagas), ...Object.values(allUserDataSagas)].map(fork)
  // );
}
 

