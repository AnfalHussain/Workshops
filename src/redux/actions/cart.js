import { ADD_TO_CART, REMOVE_FROM_CART, CHECKOUT } from "./types";
import instance from "./instance";

export const addItem = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const removeItem = (item) => ({
  type: REMOVE_FROM_CART,
  payload: item,
});

export const checkout = (workshops, history) => async (dispatch) => {
  try {
    console.log("workshops inside redux", history);
    const res = await instance.post("register/", workshops);
    dispatch({ type: CHECKOUT, payload: res.data });
    if (history) {
      history.replace("/successful");
    }
  } catch (error) {
    console.error(error);
  }
};
