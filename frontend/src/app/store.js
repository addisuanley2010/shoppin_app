

import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { getTotals } from "../features/cartSlice";
import productsReducer, { productsFetch } from "../features/productsSlice"; 
import authReducer, { loadUser } from "../features/authSlice";
export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart:cartReducer,
    auth:authReducer

  },

});
store.dispatch(loadUser())
store.dispatch(productsFetch());
store.dispatch(getTotals());



