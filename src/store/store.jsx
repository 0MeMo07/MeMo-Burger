import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slices/CartSlice";

export const store = configureStore({
    reducer:{ 
        cart:cartReducer
    }
})