import axios from "axios";

let apiURL = "https://api.makkcha.com/";

const api = axios.create({
  baseURL: apiURL
});

export const makchaAPI = {
  getFeedback: (page, limit = 5) =>
    api.get(`feedback?page=${page}&limit=${limit}`)
};
