import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../containers/Home'
import { Auth } from '../containers/Auth'

const MainRoutes = () => {
    return (
    <Routes>
        <Route path="/" element={Home} />
        <Route path="/auth" element={Auth} />
    </Routes>
    )
}

export default MainRoutes
