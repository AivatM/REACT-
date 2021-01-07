import { profileApi } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  postsData: [
    { id: 1, message: "Всем привет", likeCount: "20" },
    { id: 2, message: "Сегодня хорошая погода", likeCount: "66" },
    { id: 3, message: "Люблю добиваться своих целей", likeCount: "33" },
    { id: 4, message: "хз", likeCount: "75" },
    { id: 5, message: "Мысли вслух", likeCount: "32" },
    { id: 6, message: "Любите", likeCount: "39" },
  ],
  newPostText: "",
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 7,
        message: state.newPostText,
        likeCount: "20",
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: "",
      };
    }
    case UPDATE_POST_TEXT: {
      return {
        ...state,
        newPostText: action.text,
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    default:
      return state;
  }
};
export const addPostActionCreator = () => {
  return { type: ADD_POST };
};
export const updatePostTextActionCreator = (text) => {
  return { type: UPDATE_POST_TEXT, text: text };
};
export const setUserProfile = (profile) => {
  return { type: SET_USER_PROFILE, profile };
};
export const setStatus = (status) => {
  return { type: SET_STATUS, status };
};
export const getUserProfile = (userId) => (dispatch) => {
  profileApi.getProfile(userId).then((response) => {
    dispatch(setUserProfile(response.data));
  });
};
export const getStatus = (userId) => (dispatch) => {
  profileApi.getStatus(userId).then((response) => {
    debugger;
    dispatch(setStatus(response.data));
  });
};
export const updateStatus = (status) => (dispatch) => {
  profileApi.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};
export default profileReducer;
