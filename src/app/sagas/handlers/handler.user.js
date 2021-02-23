import { call, put, takeLatest } from "redux-saga/effects";
import { requestSignUpUser } from "../requests/request.user";
import { requestSignOutUser } from "../requests/request.user";
import { requestSignInUser } from "../requests/request.user";
import { requestUploadImage } from "../requests/request.user";
import { requestGetUserData } from "../requests/request.user";
import { requestEditUserDetails } from "../requests/request.user";
import { requestMarkNotificationsRead } from "../requests/request.user";
import { requestResetPassword } from "../requests/request.user";
import { requestUpdateEmailAddress } from "../requests/request.user";
import { requestSetAuthorizationHeader } from "../requests/request.user"
import { requestUpdatePassword } from "../requests/request.user"
import { requestUpdateUsername } from "../requests/request.user"
import { requestGetUsernames } from "../requests/request.user";

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
  getUserData,
  loadingUser,
  setAuthorizationHeader,
  updateEmailAddress,
  updatePassword,
  updateUsername,
  getUsernames,
  setUsernames,
  getUser,
  loadingData
} from 'features/users/userSlice'

import { clearErrors, stopLoadingUi, setErrors, loadingUi } from 'features/ui/uiSlice'
import history from 'utils/history'
import axios from "axios";
import { setEntries } from "features/contests/entrySlice";

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
      history.push('/user-profile');
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

function* handleSignOutUser() {
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
function* handleUploadImage(formData) {
  yield put(loadingUser());
    try {
      yield call(requestUploadImage, formData);
      const user = yield call(requestGetUserData);
      const { data } = user;
      yield put(setUser({ ...data }));
    } catch (error) {
      console.log(error);
      yield put(setErrors(error.response.data));
    }
}


// Get User Data
function* handleGetUserData() {
  yield put(loadingUser());
    try {
      const user = yield call(requestGetUserData);
      const { data } = user;
      yield put(setUser({ ...data }));
    } catch (error) {
      console.log(error);
      yield put(setErrors(error.response.data));
    }
}

// Edit User User Details
function* handleEditUserDetails(userDetails) {
  yield put(loadingUser());
    try {
      yield call(requestEditUserDetails, userDetails);
      const user = yield call(requestGetUserData);
      const { data } = user;
      yield put(setUser({ ...data }));
    } catch (error) {
      console.log(error);
      yield put(setErrors(error.response.data));
    }
}

// Update Username
function* handleUpdateUsername(newUsername) {
  yield put(loadingUser());
    try {
      yield call(requestUpdateUsername, newUsername);
      const user = yield call(requestGetUserData);
      const { data } = user;
      yield put(setUser({ ...data }));
    } catch (error) {
      console.log(error);
      yield put(setErrors(error.response.data));
    }
}

//Update Firebase Email
function* handleUpdateEmailAddress(email) {
  yield put(loadingUser());
    try {
      yield call(requestUpdateEmailAddress, email);
      const user = yield call(requestGetUserData);
      const { data } = user;
      yield put(setUser({ ...data }));
    } catch (error) {
      console.log(error);
      yield put(setErrors(error.response.data));
    }
}

// Update Firebase Password
function* handleUpdatePassword(password) {
  yield put(loadingUser());
    try {
      yield call(requestUpdatePassword, password);
      const user = yield call(requestGetUserData);
      const { data } = user;
      yield put(setUser({ ...data }));
    } catch (error) {
      console.log(error);
      yield put(setErrors(error.response.data));
    }
}


// Notifications
export function* handleMarkNotificationsRead(notificationIds) {
    try {
      const response = yield call(requestMarkNotificationsRead);
      const { data } = response;
      yield put(notificationsRead({ ...data }));
    } catch (error) {
      console.log(error);
      yield put(setErrors(error.response.data));
    }
}  


// Authorisation
function* handleSetAuthorizationHeader() {
    try {
      yield call(requestSetAuthorizationHeader);
    } catch (error) {
      console.log(error);
      yield put(setErrors(error.response.data));
    }
}

// Get Usernames
function* handleGetUsernames(action) {
  try {
    const response = yield call(requestGetUsernames);
    const { data } = response;
    yield put(setUsernames(data));
  } catch (error) {
    console.log(error);
  }
}



function* userSagas() {
  yield takeLatest(signInUser.type, handlesignInUser);
  yield takeLatest(resetPassword.type, handleResetPassword);
  yield takeLatest(signUpUser.type, handlesignUpUser);
  yield takeLatest(uploadImage.type, handleUploadImage);
  yield takeLatest(updateEmailAddress.type, handleUpdateEmailAddress);
  yield takeLatest(updatePassword.type, handleUpdatePassword);
  yield takeLatest(updateUsername.type, handleUpdateUsername);
  yield takeLatest(editUserDetails.type, handleEditUserDetails);
  yield takeLatest(signOutUser.type, handleSignOutUser);
  yield takeLatest(markNotificationsRead.type, handleMarkNotificationsRead);
  yield takeLatest(getUserData.type, handleGetUserData);
  yield takeLatest(setAuthorizationHeader.type, handleSetAuthorizationHeader);
  yield takeLatest(getUsernames.type, handleGetUsernames);
}
export default userSagas