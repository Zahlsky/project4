import React from 'react'
import { Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'


const PrivateRoute = ({ children }) => {
  
    const token = localStorage.getItem('BAOToken')
    axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null
 

  return ( token ? children : <Navigate to='/login' />

  )
}

export default PrivateRoute