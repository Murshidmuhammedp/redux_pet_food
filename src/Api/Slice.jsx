import { createSlice } from "@reduxjs/toolkit";
import {  Loginuser, product, productid } from "./Thunk";


export const Productslice = createSlice({
    name: "Slice",
    initialState: {
        products: [],
        productid: [],
        addcart: [],
        Loginuser:[],
    },
    extraReducers: (builder) => {
        builder.addCase(product.fulfilled, (state, action) => {
            state.products = action.payload;
        });
        builder.addCase(productid.fulfilled, (state, action) => {
            state.productid = action.payload;
        });
        builder.addCase(Loginuser.fulfilled, (state, action) => {
            state.Loginuser = action.payload.data;
        });
    }
})

export default Productslice.reducer;