import axios from "axios";
import config from 'utils/config'


// urlEndPoint - test url

export function requestGetUserEntriesData(userId) {
    return axios.request({
      method: "get",
      url: `${config.prodUrlEndpoint}/${userId}`,
      data: userId.payload
    });
}

export function requestAvote(entryId) {
  return axios.request({
    method: "get",
    url: `${config.prodUrlEndpoint}/entry/${entryId}/vote`,
    data: entryId.payload
  });
}

export function requestFollowUser(userId) {
  return axios.request({
    method: "get",
    url: `${config.prodUrlEndpoint}/user/${userId}/follow`,
    data: userId.payload
  });
}

export function requestUnFollowUser(userId) {
  return axios.request({
    method: "get",
    url: `${config.prodUrlEndpoint}/user/${userId}/unfollow`,
    data: userId.payload
  });
}

export function requestEntryComment(entrytId) {
  return axios.request({
    method: "post",
    url: `${config.prodUrlEndpoint}/entryt/${entrytId}/comment`,
    data: entrytId.payload
  });
}

export function requestEnterContest(contestId) {
  return axios.request({
    method: "post",
    url: `${config.prodUrlEndpoint}/${contestId}`,
  });
}

export function requestLikeEntry(entryId) {
  return axios.request({
    method: "get",
    url: `${config.prodUrlEndpoint}/entry/${entryId}/like`,
    data: entryId.payload
  });
}

export function requestUnLikeEntry(entryId) {
  return axios.request({
    method: "get",
    url: `${config.prodUrlEndpoint}/entry/${entryId}/unlike`,
    data: entryId.payload
  });
}

export function requestGetContestEntries() {
  return axios.request({
    method: "get",
    url: `${config.prodUrlEndpoint}/contests`,
  });
}

export function requestGetContestEntry(entryId) {
  return axios.request({
    method: "get",
    url: `${config.prodUrlEndpoint}/entry/${entryId}`,
    data: entryId.payload
  });
}



