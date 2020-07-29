import axios from "axios";

//export below gets all users (getUSers)
export default {
  getUsers: function() {

    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  }
};
