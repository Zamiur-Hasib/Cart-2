import React from 'react'
import { DUMMY_PRODUCTS } from '../dummy-product'
import Product from './Product'

const Products = () => {
  return (
    <section>
        {DUMMY_PRODUCTS.map(product =>{
            return(
            <li key={product.id}>
                <Product 
                    name={product.name}
                    price={product.price}
                    imgURL={product.imgURL}
                />
            </li>)
        })}
    </section>
  )
}

export default Products