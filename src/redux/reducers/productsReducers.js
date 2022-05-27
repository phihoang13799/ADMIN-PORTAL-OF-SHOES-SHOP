import { ActionTypes } from "../constants/action-types";
const intialState = {
  products: [],
  isLoading: false,
};
const intialStateCate = {
  categories: [],
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.DELETE_PRODUCT:
      return { ...state, products: payload};
    default:
      return state;
  }
};
export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

export const categoriesReducer = (state = intialStateCate, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_CATEGORIES:
      return { ...state, categories: payload };
    case ActionTypes.DELETE_CATEGORIES:
      return { ...state, categories: payload};
    case ActionTypes.POST_CATEGORIES:
      return { ...state, categories: payload };
    case ActionTypes.PUT_CATEGORIES:
      return { ...state, categories: payload};
    default:
      return state;
  }
};

export const selectedCategoryReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_CATEGORY:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_CATEGORY:
      return {};
    default:
      return state;
  }
};
