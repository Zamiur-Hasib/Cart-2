import React from 'react'
import { useSelector } from 'react-redux'

import Layout from './Componennts/Layout'
import StartingPage from './Componennts/StartingPage'

const App = () => {
  const isLoggedIn = useSelector(state=>state.start.isLoggedIn)
  return (
    <>
    { !isLoggedIn && <StartingPage/> }
    {isLoggedIn && <Layout/>}
    </>
  )
}

export default App