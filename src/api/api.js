import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "a14cfb60-f8b1-4a39-ae2a-8664ebe15c02",
  },
});

export const userAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  follow(id) {
    return instance.post(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
  unfollow(id) {
    return instance.delete(`/follow/${id}`).then((response) => {
      return response.data;
    });
  },
};

export const authAPI = {
  getAuthApi() {
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  },
};
