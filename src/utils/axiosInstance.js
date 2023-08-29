import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://localhost:8800/api",
});
export default axiosInstance;
