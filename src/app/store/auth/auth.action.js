import { API } from "@/app/shared/apis/api";
import { tokenConfig } from "@/app/shared/utils/token-config";
import * as types from "./auth.type";

export const signUpSuccess = message => {
  return {
    type: types.SIGNUP_SUCCESS,
    payload: { message },
  };
};

export const signUpFailure = message => {
  return {
    type: types.SIGNUP_FAILURE,
    payload: { message },
  };
};

export const signUp = user => dispatch => {
  return new Promise((resolve, reject) => {
    API.post("/auth/signup", user)
      .then(res => {
        const { message } = res.data;
        dispatch(signUpSuccess(message));
        resolve(message);
      })
      .catch(error => {
        const { message } = error.response.data;
        dispatch(signUpFailure(message));
        reject(message);
      });
  });
};

export const loginSuccess = (message, token, currentUser) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload: { message, token, currentUser },
  };
};

export const loginFailure = message => {
  return {
    type: types.LOGIN_FAILURE,
    payload: { message },
  };
};

export const login = user => dispatch => {
  return new Promise((resolve, reject) => {
    API.post("/auth/login", user)
      .then(res => {
        const { message, token, userData } = res.data;
        dispatch(loginSuccess(message, token, userData));
        resolve(message);
      })
      .catch(error => {
        const { message } = error.response.data;
        dispatch(loginFailure(message));
        reject(message);
      });
  });
};

export const logoutSuccess = () => {
  return {
    type: types.LOGOUT_SUCCESS,
  };
};

export const logout = () => dispatch => {
  dispatch(logoutSuccess());
};

export const getCurrentUserSuccess = currentUser => {
  return {
    type: types.GET_CURRENT_USER_SUCCESS,
    payload: { currentUser },
  };
};

export const getCurrentUserFailure = message => {
  return {
    type: types.GET_CURRENT_USER_FAILURE,
    payload: { message },
  };
};

export const getCurrentUser = () => (dispatch, getState) => {
  API.get("/auth/user", tokenConfig(getState))
    .then(res => {
      const { userData } = res.data;
      dispatch(getCurrentUserSuccess(userData));
    })
    .catch(error => {
      const { message } = error.response.data;
      dispatch(getCurrentUserFailure(message));
    });
};

export const getUserSuccess = user => {
  return {
    type: types.GET_USER_SUCCESS,
    payload: { user },
  };
};

export const getUserFailure = message => {
  return {
    type: types.GET_USER_FAILURE,
    payload: { message },
  };
};

export const getUser = username => dispatch => {
  return new Promise((resolve, reject) => {
    API.get(`/user/${username}`)
      .then(res => {
        const { userData } = res.data;
        dispatch(getUserSuccess(userData));
        resolve(userData);
      })
      .catch(error => {
        const { message } = error.response.data;
        dispatch(getUserFailure(message));
        reject(message);
      });
  });
};

export const followUserSuccess = (message, followUser, currentUser) => {
  return {
    type: types.FOLLOW_USER_SUCCESS,
    payload: { message, followUser, currentUser },
  };
};

export const followUser = id => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    API.post(`/user/${id}/follow`, null, tokenConfig(getState))
      .then(res => {
        const { message, followUser, currentUser } = res.data;
        dispatch(followUserSuccess(message, followUser, currentUser));
        resolve(message);
      })
      .catch(error => {
        const { message } = error.response.data;
        reject(message);
      });
  });
};

export const editUserSuccess = (username, currentUser, message) => {
  return {
    type: types.EDIT_USER_SUCCESS,
    payload: { username, currentUser, message },
  };
};

export const editUserFailure = message => {
  return {
    type: types.EDIT_USER_FAILURE,
    payload: { message },
  };
};

export const editUser = (username, user) => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    const formData = new FormData();

    formData.append("name", user.name);
    formData.append("bio", user.bio);
    formData.append("location", user.location);
    formData.append("website", user.website);

    if (typeof user.banner === "string") {
      formData.append("banner", user.banner);
    } else {
      formData.append("images", user.banner, "banner");
    }

    if (typeof user.profileImage === "string") {
      formData.append("profileImage", user.profileImage);
    } else {
      formData.append("images", user.profileImage, "profileImage");
    }

    API.put(`/user/:${username}`, formData, tokenConfig(getState))
      .then(res => {
        const { message, userData } = res.data;
        dispatch(editUserSuccess(username, userData, message));
        resolve(message);
      })
      .catch(error => {
        const { message } = error.response.data;
        dispatch(editUserFailure(message));
        reject(message);
      });
  });
};

export const getFollowers = username => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    API.get(`/user/${username}/followers`, tokenConfig(getState))
      .then(res => {
        const { followers, following } = res.data;
        dispatch({
          type: types.GET_FOLLOWERS_SUCCESS,
          payload: { followers, following },
        });
        resolve("OK");
      })
      .catch(error => {
        const { message } = error.response.data;
        reject(message);
      });
  });
};
