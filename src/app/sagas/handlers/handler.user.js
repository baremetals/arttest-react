import { call, put, takeLatest } from "redux-saga/effects";
import { requestSignUpUser } from "../requests/request.user";
import { requestSignOutUser } from "../requests/request.user";
import { requestSignInUser } from "../requests/request.user";
import { requestUploadImage } from "../requests/request.user";
import { requestGetUserData } from "../requests/request.user";
import { requestEditUserDetails } from "../requests/request.user";
import { requestMarkNotificationsRead } from "../requests/request.user";
import { requestResetPassword } from "../requests/request.user";

import {
  signUpUser, 
  signInUser,        
  signOutUser, 
  uploadImage,
  resetPassword,
  editUserDetails,
  markNotificationsRead,
  setUser,
  setUnAuthenticated,
  notificationsRead,
  getUserData
} from 'features/users/userSlice'
import { clearErrors, stopLoadingUi, setErrors, loadingUi } from 'features/ui/uiSlice'
import history from 'utils/history'
import axios from "axios";
import { connect } from 'react-redux';


// Sign Up
function* handlesignUpUser(newUserData) {
  yield put(loadingUi());
    try {
      yield call(requestSignUpUser, newUserData);
      const user = yield call(requestGetUserData);
      const { data } = user;
      yield put(setUser({ ...data }));
      yield put(clearErrors());
      history.push('/signin');
    } catch (error) {
      console.log(error);
      yield put(setErrors(error.response.data));
    }
}

// Sign In
function* handlesignInUser(userData) {
  yield put(loadingUi());
    try {
      yield call(requestSignInUser, userData);
      const user = yield call(requestGetUserData);
      const { data } = user;
      yield put(setUser({ ...data }));
      yield put(clearErrors());
      // history.push('/profile');
    } catch (error) {
      console.log(error);
      yield put(setErrors(error.response.data));
    }
}  

// SignOut
// function* handleSignOutUser(action) {
//     try {
//       const response = yield call(requestSignOutUser);
//       const { data } = response;
//       yield put(setUnAuthenticated({ ...data }));
//     } catch (error) {
//       console.log(error);
//     }
// }

function* handleSignOutUser(action) {
  try {
    localStorage.removeItem('FBIdToken');
    delete axios.defaults.headers.common['Authorization'];
    yield put(setUnAuthenticated());
  } catch (error) {
    console.log(error);
    yield put(setErrors(error.response.data));
  }
}

function* handleResetPassword(email) {
  yield put(loadingUi());
  try {
    yield call(requestResetPassword, email);
    yield put(stopLoadingUi());
    history.push('/signin');
  } catch (error) {
    console.log(error);
    yield put(stopLoadingUi());
    yield put(setErrors(error.response.data));
  }
}


// Upload Image
function* handleUploadImage(action) {
    try {
      const response = yield call(requestUploadImage);
      const { data } = response;
      yield put(setErrors({ ...data }));
    } catch (error) {
      console.log(error);
    }
}


// Get User Data
function* handleGetUserData(action) {
    try {
      const response = yield call(requestGetUserData);
      const { data } = response;
      yield put(setUser({ ...data }));
    } catch (error) {
      console.log(error);
    }
}


// Edit User User Details
function* handleEditUserDetails(action) {
    try {
      const response = yield call(requestEditUserDetails);
      const { data } = response;
      yield put(setErrors({ ...data }));
    } catch (error) {
      console.log(error);
    }
}


// Notifications
export function* handleMarkNotificationsRead(action) {
    try {
      const response = yield call(requestMarkNotificationsRead);
      const { data } = response;
      yield put(notificationsRead({ ...data }));
    } catch (error) {
      console.log(error);
    }
}  


// Authorisation
// function* handleSetAuthorizationHeader(action) {
//     try {
//       const response = yield call(requestSetAuthorizationHeader);
//       const { data } = response;
//       yield put(setAuthorizationHeader({ ...data }));
//     } catch (error) {
//       console.log(error);
//     }
// }


function* userSagas() {
  yield takeLatest(signInUser.type, handlesignInUser);
  yield takeLatest(resetPassword.type, handleResetPassword);
  yield takeLatest(signUpUser.type, handlesignUpUser);
  yield takeLatest(uploadImage.type, handleUploadImage);
  yield takeLatest(editUserDetails.type, handleEditUserDetails);
  yield takeLatest(signOutUser.type, handleSignOutUser);
  yield takeLatest(markNotificationsRead.type, handleMarkNotificationsRead);
  yield takeLatest(getUserData.type, handleGetUserData);
  // yield takeLatest(setAuthorizationHeader.type, handleSetAuthorizationHeader);
}
export default userSagas