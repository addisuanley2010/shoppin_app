

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import productsReducer, { productsFetch } from "../features/productsSlice"; 
import { getTotals } from "../features/cartSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart:cartReducer

  },

});

store.dispatch(productsFetch());
store.dispatch(getTotals());



