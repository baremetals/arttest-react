import axios from "axios";
import config from 'utils/config'


// urlEndPoint - test url

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
  })
}

export function requestResetPassword(email) {
  return axios.request({
    method: "post",
    url: `${config.urlEndPoint}/reset-password`,
    data: email.payload
  })
}

export function requestUpdatePassword(newPassword) {
  return axios.request({
    method: "post",
    url: `${config.urlEndPoint}/update-password`,
    data: newPassword.payload
  })
}

export function requestUpdateEmailAddress(newEmail) {
  return axios.request({
    method: "post",
    url: `${config.urlEndPoint}/update-email`,
    data: newEmail.payload
  })
}

export function requestUpdateUsername(newUsername) {
  return axios.request({
    method: "post",
    url: `${config.urlEndPoint}/user/username`,
    data: newUsername.payload
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

export function requestUploadImage(formData) {
  return axios.request({
    method: "post",
    url: `${config.prodUrlEndpoint}/user/image`,
    data: formData.payload
  })
}

export function requestEditUserDetails(userDetails) {
  return axios.request({
    method: "post",
    url: `${config.prodUrlEndpoint}/user`,
    data: userDetails.payload
  })
}

export function requestMarkNotificationsRead(notificationIds) {
  return axios.request({
    method: "post",
    url: `${config.prodUrlEndpoint}/notifications`,
    data: notificationIds.payload
  })
}
  
export const requestSetAuthorizationHeader = (token) => {
    const FBIdToken = `Bearer ${token}`;
    localStorage.setItem('FBIdToken', FBIdToken);
    axios.defaults.headers.common['Authorization'] = FBIdToken;
};

export function requestGetUsernames() {
  return axios.request({
    method: "get",
    url: `${config.prodUrlEndpoint}/usernames`
  });
}


