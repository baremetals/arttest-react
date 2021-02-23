import { all, fork } from "redux-saga/effects";


import userSagas from './handlers/handler.user';
import BlogPostSagas from './handlers/handler.blogPostData';

export default function* rootSaga() {
  yield all([
    fork(userSagas),
    fork(BlogPostSagas)])
}
 

