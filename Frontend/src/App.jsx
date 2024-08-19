import React from 'react'
import Home from './Home/Home'
import {Routes,Route} from "react-router-dom"
import Courses from './Courses/Courses'
import Signup from './Components/Signup'


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/course' element={<Courses/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>

      </Routes>
    </>
  )
}

export default App