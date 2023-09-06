import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UserState } from '../context/UserCotext'

const ProtectedRoute = () => {

  const { userState } = UserState()

  if (!userState?.email) {
    return <Outlet />
  }

  return (
      <Navigate to='/not-found' />
  )
}

export default ProtectedRoute