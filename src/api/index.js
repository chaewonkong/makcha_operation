import axios from "axios";

let apiURL = "https://api.makkcha.com/";

const api = axios.create({
  baseURL: apiURL
});

export const makchaApi = {
  getFeedback: (page, limit = 5) =>
    api.get(`feedback?page=${page}&limit=${limit}`),
  // deleteFeedback: (feedbackId) => api.delete(`feedback/${feedbackId}`),
  getNotice: (page, limit = 5) => api.get(`notice?page=${page}&limit=${limit}`),
  postNotice: ({ title, content }) => api.post(`notice`, { title, content }),
  deleteNotice: noticeId => api.delete(`notice/${noticeId}`)
};
