import { all, fork } from "redux-saga/effects";


import userSagas from './handlers/handler.user';
import BlogPostSagas from './handlers/handler.blogPostData';
import contestSagas from './handlers/handler.contestData';
import eventSagas from './handlers/handler.eventData';
import userDataSagas from './handlers/handler.userData'

export default function* rootSaga() {
  yield all([
    fork(userSagas),
    fork(BlogPostSagas),
    fork(contestSagas),
    fork(eventSagas),
    fork(userDataSagas)
  ])
}
 

