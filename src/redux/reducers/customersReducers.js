import { ActionTypes } from "../constants/action-types";

const intialStateCus = {
    customers: [],
    isLoading: false,
  };

  export const customersReducer = (state = intialStateCus, { type, payload }) => {
    switch (type) {
      case ActionTypes.GET_CUSTOMERS:
        return { ...state, customers: payload };
      case ActionTypes.DELETE_CUSTOMERS:
        return { ...state, customers: payload};
    //   case ActionTypes.POST_CUSTOMERS:
    //     return { ...state, customers: payload };
      case ActionTypes.PUT_CUSTOMERS:
        return { ...state, customers: payload};
      default:
        return state;
    }
  };
  
  export const selectedCustomersReducer = (state = {}, { type, payload }) => {
    console.log(type);
    switch (type) {
      case ActionTypes.SELECTED_CUSTOMERS:
        return { ...state, ...payload };
      case ActionTypes.REMOVE_SELECTED_CUSTOMERS:
        return {};
      default:
        return state;
    }
  };