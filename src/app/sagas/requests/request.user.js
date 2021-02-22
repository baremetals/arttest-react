import axios from "axios";
import config from 'utils/config'
import { setErrors } from 'features/ui/uiSlice'

import { loadingUi } from 'features/ui/uiSlice'
import { setUnAuthenticated } from 'features/users/userSlice'
import { notificationsRead } from 'features/users/userSlice'
import history from 'utils/history'

const username = ((state) => state.user.credentials.username);
// urlEndPoint

export function requestSignUpUser(newUserData) {
  return axios.request({
    method: "post",
    url: `${config.prodUrlEndpoint}/signup`,
    data: newUserData.payload
  })
  .then((res) => {
    requestSetAuthorizationHeader(res.data.token);
  })
}

export function requestSignInUser(userData) {
  return axios.request({
    method: "post",
    url: `${config.prodUrlEndpoint}/signin`,
    data: userData.payload
  })
  .then((res) => {
    requestSetAuthorizationHeader(res.data.token);
    history.push(`/profile/:${username}`);
  })
}

export function requestResetPassword(email) {
  // console.log(email)
  return axios.request({
    method: "post",
    url: `${config.urlEndPoint}/reset-password`,
    data: email.payload
  })
}
  

export function requestSignOutUser() {
  localStorage.removeItem('FBIdToken');
  delete axios.defaults.headers.common['Authorization'];
}

export function requestGetUserData() {
  return axios.request({
    method: "get",
    url: `${config.prodUrlEndpoint}/user`
  });
}
  
export const requestUploadImage = (formData) => (dispatch) => {
    dispatch(loadingUi);
    axios
      .post(`${config.prodUrlEndpoint}/user/image`, formData)
      .then(() => {
        dispatch(requestGetUserData());
      })
      .catch((err) => {
        dispatch(dispatch(setErrors(err)));
      });
};
  
export const requestEditUserDetails = (userDetails) => (dispatch) => {
    dispatch(loadingUi);
    axios
      .post(`${config.prodUrlEndpoint}/user`, userDetails)
      .then(() => {
        dispatch(requestGetUserData());
      })
      .catch((err) => {
        dispatch(dispatch(setErrors(err)));
      });
};
  
export const requestMarkNotificationsRead = (notificationIds) => (dispatch) => {
    axios
      .post(`${config.prodUrlEndpoint}/notifications`, notificationIds)
      .then((res) => {
        dispatch(notificationsRead());
      })
      .catch((err) => {
        dispatch(dispatch(setErrors(err)));
      });
};
  
export const requestSetAuthorizationHeader = (token) => {
    const FBIdToken = `Bearer ${token}`;
    localStorage.setItem('FBIdToken', FBIdToken);
    axios.defaults.headers.common['Authorization'] = FBIdToken;
};

