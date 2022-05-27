import { ActionTypes } from "../constants/action-types";

export const getCustomers = (customers) => {
    return {
      type: ActionTypes.GET_CUSTOMERS,
      payload: customers,
    };
  };

  export const putCustomers = (customers) => {
    return {
      type: ActionTypes.PUT_CUSTOMERS,
      payload: customers,
    };
  };
  
  export const deleteCustomers = (customers) => {
    return {
      type: ActionTypes.DELETE_CUSTOMERS,
      payload: customers,
    };
  };
  
  export const selectedCustomers = (customers) => {
    return {
      type: ActionTypes.SELECTED_CUSTOMERS,
      payload: customers,
    };
  };
  
  export const removeSelectedCustomers = () => {
    return {
      type: ActionTypes.REMOVE_SELECTED_CUSTOMERS,
    };
  };