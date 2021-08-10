import * as types from "./auth.type";

const initialState = {
  token: localStorage.getItem("twitter"),
  currentUser: null,
  user: null,
  loading: null,
  error: null,
  success: null,
  followersUser: null,
  followingUser: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        token: null,
        currentUser: null,
        user: null,
        loading: false,
        error: null,
        success: action.payload.message,
      };
    case types.SIGNUP_FAILURE:
      return {
        ...state,
        token: null,
        currentUser: null,
        user: null,
        loading: false,
        error: action.payload.message,
        success: null,
      };
    case types.LOGIN_SUCCESS:
      localStorage.setItem("twitter", action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        currentUser: action.payload.currentUser,
        user: null,
        loading: false,
        error: null,
        success: action.payload.message,
      };
    case types.LOGIN_FAILURE:
    case types.GET_CURRENT_USER_FAILURE:
      return {
        ...state,
        error: action.payload.message,
      };
    case types.GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload.currentUser,
        error: null,
      };
    case types.LOGOUT_SUCCESS:
      localStorage.removeItem("twitter");
      return {
        ...state,
        token: null,
        currentUser: null,
        loading: false,
        error: null,
        success: null,
      };
    case types.GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.user,
      };
    case types.GET_USER_FAILURE:
      return {
        ...state,
        user: null,
        loading: false,
        error: action.payload.message,
        success: null,
      };

    case types.FOLLOW_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload.currentUser,
        user: action.payload.followUser,
      };

    case types.EDIT_USER_SUCCESS:
      return {
        ...state,
        currentUser:
          state.currentUser.username === action.payload.username &&
          action.payload.currentUser,
        error: null,
        success: action.payload.message,
      };
    case types.EDIT_USER_FAILURE:
      return {
        ...state,
        error: action.payload.message,
        success: null,
      };

    case types.GET_FOLLOWERS_SUCCESS:
      return {
        ...state,
        followingUser: action.payload.following,
        followersUser: action.payload.followers,
      };
    default:
      return state;
  }
};
