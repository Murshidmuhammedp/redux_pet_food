import { configureStore } from "@reduxjs/toolkit";
import Products from "../Api/Slice";

export const Store = configureStore({
    reducer: {
        Products,
    }
});