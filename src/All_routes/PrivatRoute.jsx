import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContextProvider'
import { Navigate, Outlet } from 'react-router-dom'

export const PrivatRoute = () => {
  const {isLogged,}=useContext(AuthContext)
  if (isLogged) {
    return (<div><Outlet /></div>)
  } else {
    return <Navigate to="/login" />
  }
}
