import React from 'react'
import { useDispatch } from 'react-redux'
import { startAction } from '../Store/startSlice'
import Cart from './Cart'
import './Heading.css'

const Heading = () => {
  const dispatch = useDispatch()
  const logOutHandler = () =>{
    dispatch(startAction.logout())
  }
  return (
    <nav className='navbar'>
      <h2 className='header-h2'>Shopping Cart</h2>
      <ul className='header-ul'>
        <li>
          <Cart/>
        </li>
        <li>
          <button className='logout-btn' onClick={logOutHandler}>
            Log Out
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Heading