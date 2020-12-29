import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login) => {
  return { type: SET_USER_DATA, data: { userId, email, login } };
};

export const getAuthUserData = () => (dispatch) => {
  authAPI.me().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setAuthUserData(data.data.id, data.data.email, data.data.login));
    }
  });
};

export default authReducer;
