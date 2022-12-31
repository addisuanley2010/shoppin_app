

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import productsReducer, { productsFetch } from "../features/productsSlice"; 
import { getTotals } from "../features/cartSlice";
import authReducer from "../features/authSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart:cartReducer,
    auth:authReducer

  },

});

store.dispatch(productsFetch());
store.dispatch(getTotals());



