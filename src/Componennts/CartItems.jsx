import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import "./CartItems.css"

const CartItems = () => {
    const cartItems = useSelector(state=>state.cart.productList)
  return (
    <div className='cart-container'>
      <h2 className='cart-heading'>Your Cart</h2>
      <ul>
        {cartItems.map(item => {
          return(
          <li key={item.id}>
            <CartItem
              name={item.name} 
              id={item.id} 
              quantity={item.quantity} 
              price={item.price} 
              totalPrice={item.totalPrice}
            />
          </li>)
        })}
      </ul>
    </div>
  )
}

export default CartItems