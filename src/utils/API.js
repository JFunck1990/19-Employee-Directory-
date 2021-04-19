import axios from "axios";

const BASEURL = "https://randomuser.me/api/";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  search: function () {
    return axios.get(BASEURL);
  }
};