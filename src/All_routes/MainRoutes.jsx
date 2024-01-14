import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Login/Login'
import Signup from '../Components/Login/Signup'
import Todos from '../Components/Todos/Todos'
import AddTodo from '../Components/Todos/AddTodo'
import EditTodo from '../Components/Todos/EditTodo'
import { PrivatRoute } from './PrivatRoute'

const MainRoutes = () => {
    return (
        <Routes >
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />

            <Route element={<PrivatRoute />}>
                <Route path="/" exact element={<Todos />} />
                <Route path='/addtask' exact element={<AddTodo />} />
                <Route path='/edit' exact element={<EditTodo />} />
            </Route>
        </Routes>

    )
}

export default MainRoutes
