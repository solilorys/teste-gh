import axios from "axios";

// const token = localStorage.getItem("@RenaisCariri:token");

const api = axios.create({
  baseURL: "http://localhost:4444/",
  headers: {
    // common: {
    //   Authorization: `Bearer ${token}`,
    // },
  },
});

export default api;
