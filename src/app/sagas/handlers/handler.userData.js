import { call, put, takeLatest } from "redux-saga/effects";
import { 
    requestGetUserEntriesData,
    requestGetUserContestsData,
    
    requestGetUserEventsData,
 } from "../requests/request.userData";

 import { 
    getUserEntriesData,
    getUserContestsData,
    
    getUserEventsData
} from 'features/users/userSlice'
import { setContests } from "features/contests/contestSlice";
import { setEvents } from "features/events/eventSlice";
import { setEntries, loadingData } from "features/contests/entrySlice";

// Get User 
function* handleGetUserEntriesData(userId) {
    yield put(loadingData());
      try {
        const res = yield call(requestGetUserEntriesData, userId);
        const { data } = res;
        yield put(setEntries({ ...data }));
      } catch (error) {
        console.log(error);
        yield put(setEntries(null));
      }
}
  
function* handleGetUserContestsData(userId) {
    yield put(loadingData());
      try {
        const res = yield call(requestGetUserContestsData, userId);
        const { data } = res;
        yield put(setContests({ ...data }));
      } catch (error) {
        console.log(error);
        yield put(setErrors(error.response.data));
      }
}


function* handleGetUserEventsData(userId) {
    yield put(loadingData());
      try {
        const res = yield call(requestGetUserEventsData, userId);
        const { data } = res;
        yield put(setEvents({ ...data }));
      } catch (error) {
        console.log(error);
        yield put(setEvents(null));
      }
}


function* userDataSagas() {
  yield takeLatest(getUserEntriesData.type, handleGetUserEntriesData);
  yield takeLatest(getUserContestsData.type, handleGetUserContestsData);
  yield takeLatest(getUserEventsData.type, handleGetUserEventsData);
}
export default userDataSagas