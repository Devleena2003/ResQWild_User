import axios from "axios";
const API = axios.create({
  baseURL: process.env.ML_SERVER_URL,
});

export const chatbotcall = (data) => API.post("/chatbot", data);
export const predictcall = (file) => API.post("/chatbot", file);
