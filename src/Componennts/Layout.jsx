import React from 'react'
import { useSelector } from 'react-redux'
import CartItems from './CartItems'
import Heading from './Heading'
import Products from './Products'

const Layout = () => {
  const showCart = useSelector(state => state.cart.isShowCart)
  return (
    <main>
        <Heading/>
        <Products/>
        { showCart && <CartItems/>}
    </main>
  )
}

export default Layout