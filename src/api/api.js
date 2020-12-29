import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "d82c0b2b-77b8-484e-9f95-d21916a9590b",
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
    return instance.post(`follow/${id}`);
  },
  unfollow(id) {
    return instance.delete(`follow/${id}`);
  },
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
};

export const authAPI = {
  me() {
    return instance.get(
      `auth/me`
    ); /* .then((response) => {
      return response.data;
    }); */
  },
};
