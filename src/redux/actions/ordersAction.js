import { ActionTypes } from "../constants/action-types";

export const getOrders = (orders) => {
    return {
      type: ActionTypes.GET_ORDERS,
      payload: orders,
    };
  };

  export const putOrders = (orders) => {
    return {
      type: ActionTypes.PUT_ORDERS,
      payload: orders,
    };
  };
  
  export const deleteOrders = (orders) => {
    return {
      type: ActionTypes.DELETE_ORDERS,
      payload: orders,
    };
  };
  
  export const selectedOrders = (orders) => {
    return {
      type: ActionTypes.SELECTED_ORDERS,
      payload: orders,
    };
  };
  
  export const removeSelectedOrders = () => {
    return {
      type: ActionTypes.REMOVE_SELECTED_ORDERS,
    };
  };