import * as actionTypes from "./types";
import jwt_decode from "jwt-decode";
import { setErrors, resetErrors } from "./errors";
import instance from "./instance";

export const profile = () => async (dispatch) => {
  try {
    const res = await instance.get("profile/");
    const profile = res.data;
    dispatch({ type: actionTypes.SET_PROFILE, payload: profile });
  } catch (error) {
    console.error(error);
  }
};

export const editProfile = (userData, history) => {
  return async (dispatch) => {
    try {
      let newUserDate = {
        user: {
          username: "",
        },
        email: userData.email,
        phone: userData.phone,
        gender: userData.gender,
        age: userData.age,
        first_name: userData.first_name,
        middle_name: userData.middle_name,
        last_name: userData.last_name,
        gender: userData.gender,
        nationality: userData.nationality,
        mobile_number: userData.mobile_number,
        secondary_contact_number: userData.secondary_contact_number,
        civil_id_number: userData.civil_id_number,
        governorate: userData.governorate,
        area: userData.area,
        education_level: userData.education_level,
        major: userData.major,
        age: userData.age,
      };

      const res = await instance.put("profile/", newUserDate);
      dispatch({ type: actionTypes.EDIT_PROFILE, payload: res.data });
      dispatch(resetErrors());
      history.replace("profile/");
    } catch (error) {
      console.error(error);
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: error.response.data,
      });
    }
  };
};

const setCurrentUser = (token) => {
  return async (dispatch) => {
    let user;
    if (token) {
      await localStorage.setItem("token", token);
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      user = jwt_decode(token);
      dispatch(profile());
    } else {
      localStorage.removeItem("token");
      delete instance.defaults.headers.common.Authorization;
      user = null;
    }

    return dispatch({ type: actionTypes.SET_CURRENT_USER, payload: user });
  };
};

export const login = (userData, history) => {
  return async (dispatch) => {
    try {
      const response = await instance.post("login/", userData);
      const user = response.data;
      dispatch(setCurrentUser(user.access));
      dispatch(resetErrors());
      history.replace("/");
    } catch (error) {
      console.log(error);
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: error.response.data,
      });
    }
  };
};

export const resetProfile = () => ({
  type: actionTypes.RESET_PROFILE,
});

export const signup = (userData, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("signup/", userData);
      const user = res.data;
      dispatch(setCurrentUser(user.access));
      dispatch(login(userData, history));
      // history.replace("/");
    } catch (error) {
      console.error(error.response.data);
      dispatch(setErrors(error.response.data));
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    dispatch(setCurrentUser());
    dispatch(resetProfile());
  };
};

export const checkForExpiredToken = () => {
  // Check for token expiration
  const token = localStorage.getItem("token");
  let user = null;
  if (token) {
    const currentTimeInSeconds = Date.now() / 1000;

    // Decode token and get user info
    user = jwt_decode(token);

    // Check token expiration
    if (user.exp >= currentTimeInSeconds) {
      // Set user
      return setCurrentUser(token);
    }
  }
  return logout();
};
