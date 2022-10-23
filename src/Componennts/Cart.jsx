import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartAction } from '../Store/CartSlice'
import './Heading.css'

const Cart = () => {
    const dispatch = useDispatch()
    const quantity = useSelector(state => state.cart.totalQuantity)
    const cartHandler = () => {
        dispatch(cartAction.showCart())
    }
    
  return (
    <div>
        <h3 className='header-h3' onClick={cartHandler}>
            Cart: {quantity} items
        </h3>
    </div>
  )
}

export default Cart