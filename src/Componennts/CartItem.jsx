import React from 'react'
import { useDispatch } from 'react-redux'
import { cartAction } from '../Store/CartSlice'
import './CartItems.css'

const CartItem = ({name, id, price, quantity, totalPrice}) => {
  const dispatch = useDispatch()
  const incrementItem = () =>{
    dispatch(cartAction.addItem({
      name,
      id,
      price
    }))
  }
  const decrementItem = () =>{
    dispatch(cartAction.removeItem(id))
  }
  return (
    <div className='cart-item'>
      <h3 style={{width:'200px'}}> {name} </h3>
      <p>${price}</p>
      <p>x {quantity}</p>
      <article>Total $ {totalPrice}</article>
      <button onClick={incrementItem} className='cart-action'>+</button>
      <button className='cart-action' onClick={decrementItem}>-</button>
    </div>
  )
}

export default CartItem