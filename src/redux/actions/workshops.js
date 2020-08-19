import instance from "./instance";
import { SET_WORKSHOPS } from "./types";

export const setWorkshops = () => async (dispatch) => {
  try {
    const res = await instance.get("workshops/");
    const workshops = res.data;

    dispatch({ type: SET_WORKSHOPS, payload: workshops });
  } catch (error) {
    console.error(error);
  }
};
