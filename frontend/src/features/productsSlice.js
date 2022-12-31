import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: [],
    status: '',
};

export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async () => {
        try {
            const response = await axios.get(
                "http://localhost:3001/products"
            );
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);


const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    // extraReducers: {
    //     [productsFetch.pending]: (state, action) => {
    //         state.status = "pending";
    //     },
    //     [productsFetch.fulfilled]: (state, action) => {
    //         state.items = action.payload;
    //         state.status = "success";
    //     },
    //     [productsFetch.rejected]: (state, action) => {
    //         state.status = "rejected";
    //     },
    // },
    extraReducers: (builder) => {
        builder.addCase(productsFetch.pending, (state, action) => {
            state.status = "pending"
        })
        builder.addCase(productsFetch.fulfilled, (state, action) => {
            state.status = "success"
            state.items = action.payload
        })
        builder.addCase(productsFetch.rejected, (state, action) => {
            state.status = "rejected"
            state.error = "rejected"
        })

    }
});

export default productsSlice.reducer;