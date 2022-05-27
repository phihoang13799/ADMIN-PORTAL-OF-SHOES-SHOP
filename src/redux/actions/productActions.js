import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
export const deleteProducts = (products) => {
  return {
    type: ActionTypes.DELETE_PRODUCT,
    payload: products,
  };
};
export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};


export const getCategories = (categories) => {
  return {
    type: ActionTypes.GET_CATEGORIES,
    payload: categories,
  };
};
export const postCategories = (categories) => {
  return {
    type: ActionTypes.POST_CATEGORIES,
    payload: categories,
  };
};
export const putCategories = (categories) => {
  return {
    type: ActionTypes.PUT_CATEGORIES,
    payload: categories,
  };
};

export const deleteCategories = (categories) => {
  return {
    type: ActionTypes.DELETE_CATEGORIES,
    payload: categories,
  };
};

export const selectedCategory = (category) => {
  return {
    type: ActionTypes.SELECTED_CATEGORY,
    payload: category,
  };
};

export const removeSelectedCategory = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_CATEGORY,
  };
};

