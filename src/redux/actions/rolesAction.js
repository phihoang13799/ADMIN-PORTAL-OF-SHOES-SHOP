import { ActionTypes } from "../constants/action-types";


export const getRoles = (roles) => {
    return {
      type: ActionTypes.GET_ROLES,
      payload: roles,
    };
  };
  export const postRoles = (roles) => {
    return {
      type: ActionTypes.POST_ROLES,
      payload: roles,
    };
  };
  export const putRoles = (roles) => {
    return {
      type: ActionTypes.PUT_ROLES,
      payload: roles,
    };
  };
  
  export const deleteRoles = (roles) => {
    return {
      type: ActionTypes.DELETE_ROLES,
      payload: roles,
    };
  };
  
  export const selectedRoles = (roles) => {
    return {
      type: ActionTypes.SELECTED_ROLES,
      payload: roles,
    };
  };
  
  export const removeSelectedRoles = () => {
    return {
      type: ActionTypes.REMOVE_SELECTED_ROLES,
    };
  };
  