import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice";
import startSlice from "./startSlice";

const store = configureStore({
    reducer:{
        start: startSlice.reducer,
        cart: cartSlice.reducer
    }
})

export default store