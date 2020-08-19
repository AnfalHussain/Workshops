import { SET_WORKSHOPS } from "../actions/types";

const initialState = {
  workshops: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_WORKSHOPS:
      const workshops = payload;
      return {
        workshops: workshops,
      };

    default:
      return state;
  }
};
