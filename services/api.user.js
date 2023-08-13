import axios from "axios";
const API = axios.create({
  baseURL: process.env.SERVER_URL,
});

export const UserData = (token) => {
  return API.get("/getUserData", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
//   API.post("/getUserData", token, {
//     headers: {
//       Authorization: "Bearer " + token,
//     },
//   });
