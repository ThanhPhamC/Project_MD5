import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'

export default function UserIndex() {
  return (
    <div>
        <Routes>
            <Route path='/home' element={<Login/>} ></Route>
        </Routes>
    </div>
  )
}
