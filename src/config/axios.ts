import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.green-api.com/",
});

export default axiosInstance;
