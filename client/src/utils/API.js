import axios from "axios";
// https://www.googleapis.com/books/v1/volumes?q=
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
// const APIKEY = ""; // APIKEY not needed

export default {
  search: function(query) {
    console.log(BASEURL + query)
    return axios.get(BASEURL + query);
  },

  getBooks: function() {
    return axios.get("/api/books");
  }
};
