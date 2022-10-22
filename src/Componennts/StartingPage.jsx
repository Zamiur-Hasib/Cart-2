import React from 'react'
import { useDispatch } from 'react-redux'
import { startAction } from '../Store/startSlice'

const StartingPage = () => {
    const dispatch = useDispatch()
    const loginHandler = () =>{
        dispatch(startAction.login())
    }
  return (
    <div>
      <h2>To start, click the button</h2>
      <button className="start-btn" onClick={loginHandler}>Start</button>
    </div>
  )
}

export default StartingPage