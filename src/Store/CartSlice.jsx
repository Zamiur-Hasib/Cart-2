import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        productList: [],
        isShowCart: false,
        totalQuantity: 0,
        totalPrice: 0,
    },
    reducers:{

        showCart(state){
            state.isShowCart = !state.isShowCart
        },

        addItem(state, action){
            const newItem = action.payload
            const existingItem = state.productList.find(item=>item.id===newItem.id)
            if(existingItem){
                existingItem.quantity++
                existingItem.totalPrice += newItem.price
            }else{
                state.productList.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    totalPrice: newItem.price,
                    quantity: 1,
                })
                state.totalQuantity++
            }
        },
        removeItem(state, action){
            const id = action.payload
            const existingItem = state.productList.find(item=> item.id===id)
            if(existingItem.quantity===1){
                state.productList = state.productList.filter(product => product.id!==id)
                state.totalQuantity--
            }else{
                existingItem.quantity--
                existingItem.totalPrice -= existingItem.price
            }
        }
    }
})

export const cartAction = cartSlice.actions

export default cartSlice