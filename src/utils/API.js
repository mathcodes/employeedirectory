import axios from "axios";

export default {
  // Gets all users
  getUsers: function() {

    return axios.get("https://raw.githubusercontent.com/mathcodes/employeedirectory/master/src/components/db.json");
  }
};
