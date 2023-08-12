import axios from "axios";
const API = axios.create({
  baseURL: process.env.SERVER_DOMAIN,
});

export const UserData = (token) => {
  return API.get("/getUserData", null, {
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
