import React from 'react'
import { DUMMY_PRODUCTS } from '../dummy-product'
import Product from './Product'
import "./Product.css"

const Products = () => {
  return (
    <div className='products'>
        {DUMMY_PRODUCTS.map(product =>{
            return(
            <li key={product.id}>
                <Product 
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    imgURL={product.imgURL}
                />
            </li>)
        })}
    </div>
  )
}

export default Products