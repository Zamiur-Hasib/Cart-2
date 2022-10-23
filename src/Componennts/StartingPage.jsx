import React from 'react'
import { useDispatch } from 'react-redux'
import { startAction } from '../Store/startSlice'
import './Startpage.css'

const StartingPage = () => {
    const dispatch = useDispatch()
    const loginHandler = () =>{
        dispatch(startAction.login())
    }
  return (
    <div className='startpage-container'>
      <button className="start-btn" onClick={loginHandler}>Start</button>
    </div>
  )
}

export default StartingPage