import axios from "axios";
import config from 'utils/config'


// urlEndPoint - test url

export function requestGetUserEntriesData(userId) {
    return axios.request({
      method: "get",
      url: `${config.prodUrlEndpoint}/username`,
      data: userId.payload
    });
}
export function requestGetUserContestsData(userId) {
    return axios.request({
      method: "get",
      url: `${config.prodUrlEndpoint}/username`,
      data: userId.payload
    });
}

export function requestGetUserEventsData(userId) {
    return axios.request({
      method: "get",
      url: `${config.prodUrlEndpoint}/username`,
      data: userId.payload
    });
}





