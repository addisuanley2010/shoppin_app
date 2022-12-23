

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import productsReducer, { productsFetch } from "../features/productsSlice"; 

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart:cartReducer

  },

});

store.dispatch(productsFetch());

