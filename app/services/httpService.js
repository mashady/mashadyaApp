import axios from "axios";
import logger from "./logService";

//axios.defaults.baseURL = process.env.REACT_APP_API_URL;
//axios.defaults.baseURL = "http://localhost:3900/api";
axios.defaults.baseURL = "http://192.168.1.7:8000/api";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 404 &&
    error.response.status < 500;

  // Unexpected errors
  if (!expectedError) {
    logger.log(error);
    console.error("An unexpected error occurred.");
  }

  return Promise.reject(error);
});

function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};
