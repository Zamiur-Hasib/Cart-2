import React from 'react'
import { useDispatch } from 'react-redux'
import { cartAction } from '../Store/CartSlice'
import "./Product.css"

const Product = ( {name, id, price, imgURL} ) => {

  const dispatch = useDispatch()
  const addToCart = () =>{
    dispatch(cartAction.addItem({
      name,
      id,
      price
    }))
  }

  return (
    <div className='product'>
        <img src={imgURL} alt={name} />
        <h2 className='product-name'>{name}</h2>
        <p className='product-price'>${price}</p>
        <button className='add-btn' onClick={addToCart}>Add To Cart</button>       
    </div>
  )
}

export default Product