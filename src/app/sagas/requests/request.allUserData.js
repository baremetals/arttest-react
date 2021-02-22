import axios from "axios";
import config from 'utils/config'

export function requestGetUsernames() {
  return axios.request({
    method: "get",
    url: `${config.prodUrlEndpoint}/usernames`
  });
}

