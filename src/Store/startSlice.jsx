import { createSlice } from "@reduxjs/toolkit";

const startSlice = createSlice({
    name: 'start',
    initialState: {
        isLoggedIn: false
    },
    reducers:{
        login(state) {
            state.isLoggedIn = true
        },
        logout(state) {
            state.isLoggedIn = false
        } 
    }
})

export const startAction = startSlice.actions
export default startSlice