import axios from "axios";
const API = axios.create({
  baseURL: process.env.SERVER_URL,
});

export const signUpUser = (signUpData) => API.post("/signup", signUpData);
export const loginUser = (loginData) => {
  console.log(API);
  return API.post("/login", loginData);
};
