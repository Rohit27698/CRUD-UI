import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Login/Login'
import Signup from '../Components/Login/Signup'
import Todos from '../Components/Todos/Todos'
import AddTodo from '../Components/Todos/AddTodo'

const MainRoutes = () => {
    return (
        <Routes >
            <Route path='/'  element={<Todos/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/addtask' element={<AddTodo/>}/>
        </Routes>
   
    )
}

export default MainRoutes
