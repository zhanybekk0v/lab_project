import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Slider from './Slider/Slider'

const App = () => {
  return (
    <>
      <BrowserRouter>
          <Navbar />
          <Slider />
      </BrowserRouter>
    </>
  )
}

export default App