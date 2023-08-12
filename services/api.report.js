import axios from "axios";
const API = axios.create({
  baseURL: process.env.SERVER_DOMAIN,
});

export const addReport = (report) => API.post("/crime-reports/add", report);
export const getAllReport = () => API.get("/crime-reports/getall");
