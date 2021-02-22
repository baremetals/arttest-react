import { call, put, takeLatest } from "redux-saga/effects";
import { setUsernames } from "features/userData/usernameSlice";
import { requestGetUsernames } from "../requests/request.allUserData";
import { getUsernames } from 'features/userData/usernameSlice'

function* handleGetUsernames(action) {
  try {
    const response = yield call(requestGetUsernames);
    const { data } = response;
    yield put(setUsernames(data));
  } catch (error) {
    console.log(error);
  }
}

function* allUserDataSagas() {
  yield takeLatest(getUsernames.type, handleGetUsernames);
}

export default allUserDataSagas