import { ActionTypes } from "../constants/action-types";

const intialStateRoles = {
    roles: [],
    isLoading: false,
  };

  export const rolesReducer = (state = intialStateRoles, { type, payload }) => {
    switch (type) {
      case ActionTypes.GET_ROLES:
        return { ...state, roles: payload };
      case ActionTypes.DELETE_ROLES:
        return { ...state, roles: payload};
      case ActionTypes.POST_ROLES:
        return { ...state, roles: payload };
      case ActionTypes.PUT_ROLES:
        return { ...state, roles: payload};
      default:
        return state;
    }
  };
  
  export const selectedRolesReducer = (state = {}, { type, payload }) => {
    console.log(type);
    switch (type) {
      case ActionTypes.SELECTED_ROLES:
        return { ...state, ...payload };
      case ActionTypes.REMOVE_SELECTED_ROLES:
        return {};
      default:
        return state;
    }
  };