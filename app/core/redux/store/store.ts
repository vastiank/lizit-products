import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productReducer from "../products/productSlice";

const rootReducer = combineReducers({
  products: productReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
