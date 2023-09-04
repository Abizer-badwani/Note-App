import React from 'react'
import { Link } from 'react-router-dom'

import {UserState} from '../context/UserCotext'

import '../css/navbar.css'
import { LogoutUser } from '../utils/UserQueries'

const Navbar = () => {

    const { state, dispatch } = UserState()
    const { mutate } = LogoutUser()
    
    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' })
        mutate()
    }

    return (
        <nav className='navbar'>
            <div className="navbar-title">Note</div>
            {
                state?.email ? 
                    <div className='logout-link'>
                        <span className='email'>{state?.email} - </span>
                        <span className='logout-text' onClick={handleLogout}>LOGOUT</span>
                    </div>
                    :
                    <Link to='/auth/login' className='login-link'>Login</Link>
            }
        </nav>
    )
}

export default Navbar
