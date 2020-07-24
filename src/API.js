import axios from "axios";

export const getUsers = function() {
  return axios.get("https://randomuser.me/api/?results=100&nat=us");
};
