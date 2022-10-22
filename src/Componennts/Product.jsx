import React from 'react'

const Product = ({name, id, price, imgURL}) => {
  return (
    <div>
        <img src={imgURL} alt={name} />
        <h2>{name}</h2>
        <p>${price}</p>
        <button>Add To Cart</button>       
    </div>
  )
}

export default Product