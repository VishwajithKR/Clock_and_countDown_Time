import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AnalogClockTime from '../components/AnalogClockTime'
import CountdownTime from '../components/CountdownTime'
import CurrentTime from '../components/CurrentTime'
import Home from '../components/Home'

function Linkpage() {
  return (
   <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/countdown' element={<CountdownTime/>}/>
    <Route path='/' element={<CurrentTime/>}/>
    <Route path='/analog' element={<AnalogClockTime/>}/>
   </Routes>
  )
}

export default Linkpage