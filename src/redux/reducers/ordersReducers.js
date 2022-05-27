import { ActionTypes } from "../constants/action-types";

const intialStateOrder = {
    orders: [],
    isLoading: true,
  };

  export const ordersReducer = (state = intialStateOrder, { type, payload }) => {
    switch (type) {
      case ActionTypes.GET_ORDERS:
        return { ...state, orders: payload };
      case ActionTypes.DELETE_ORDERS:
        return { ...state, orders: payload};
    //   case ActionTypes.POST_CUSTOMERS:
    //     return { ...state, customers: payload };
      case ActionTypes.PUT_ORDERS:
        return { ...state, orders: payload};
      default:
        return state;
    }
  };
  
  export const selectedOrdersReducer = (state = {}, { type, payload }) => {
    console.log(type);
    switch (type) {
      case ActionTypes.SELECTED_ORDERS:
        return { ...state, ...payload };
      case ActionTypes.REMOVE_SELECTED_ORDERS:
        return {};
      default:
        return state;
    }
  };