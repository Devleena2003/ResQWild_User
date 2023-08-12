import axios from "axios";
const API = axios.create({
  baseURL: process.env.SERVER_DOMAIN,
});

export const signUpUser = (signUpData) => API.post("/signup", signUpData);
export const loginUser = (loginData) => {
  console.log(loginData);
  return API.post("/login", loginData);
};
