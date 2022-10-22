import { configureStore } from "@reduxjs/toolkit";
import startSlice from "./startSlice";

const store = configureStore({
    reducer:{
        start: startSlice.reducer
    }
})

export default store