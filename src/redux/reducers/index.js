import { combineReducers } from "redux";
import { selectedRoles } from "../actions/rolesAction";
import { productsReducer, selectedProductsReducer, categoriesReducer,selectedCategoryReducer } from "./productsReducers";
import {rolesReducer} from "./rolesReducers"
import {customersReducer, selectedCustomersReducer} from "./customersReducers"
import {ordersReducer, selectedOrdersReducer} from "./ordersReducers"

const reducers = combineReducers({
  allProducts: productsReducer,
  allCategories: categoriesReducer,
  product: selectedProductsReducer,
  category:selectedCategoryReducer,

  allRoles: rolesReducer,
  roles: selectedRoles,

  allCustomers: customersReducer,
  customers: selectedCustomersReducer,

  allOrders: ordersReducer,
  orders: selectedOrdersReducer,
});
export default reducers;