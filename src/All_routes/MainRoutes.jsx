import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Todos from '../Components/Todos/Todos'
import AddTodo from '../Components/Todos/AddTodo'
import EditTodo from '../Components/Todos/EditTodo'
import { PrivatRoute } from './PrivatRoute'
import Login from '../Components/Login_Signup/Login'
import Signup from '../Components/Login_Signup/Signup'
import Dashbord from '../Components/Dashbord'
import User from '../Components/Login_Signup/User'

const MainRoutes = () => {
    return (
        <Routes >
            <Route path='/' element={<Dashbord/>}/>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />

            <Route element={<PrivatRoute />}>
                <Route path="/todo" exact element={<Todos />} />
                <Route path='/addtask' exact element={<AddTodo />} />
                <Route path='/edit' exact element={<EditTodo />} />
                <Route path='/user' exact element={<User/>}/>
            </Route>
        </Routes>

    )
}

export default MainRoutes
