import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHECKOUT,
  SET_PROFILE,
} from "../actions/types";

const initialState = {
  workshops: [],
  orders: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newWorkshop = action.payload;
      let workshopExists = state.workshops.find(
        (workshop) => workshop.id === newWorkshop.id
      );
      if (!workshopExists) {
        return {
          ...state,
          workshops: state.workshops.concat(newWorkshop),
        };
      }

    case REMOVE_FROM_CART:
      const workshopToBeRemove = action.payload;
      let updatedWorkshops = state.workshops.filter(
        (workshop) => workshop !== workshopToBeRemove
      );
      return {
        ...state,
        workshops: updatedWorkshops,
      };

    case CHECKOUT:
      return {
        orders: state.orders.concat(action.payload),
        workshops: [],
      };
    // case SET_PROFILE:
    //   const orders = action.payload;
    //   return {
    //     ...state,
    //     orders: orders.order_history,
    //     loading: false
    //   };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
