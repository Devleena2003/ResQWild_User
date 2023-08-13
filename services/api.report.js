import axios from "axios";
const API = axios.create({
  baseURL: process.env.SERVER_URL,
});

export const addReport = (report) => API.post("/crime-reports/add", report);
export const getAllReport = () => API.get("/crime-reports/getall");
