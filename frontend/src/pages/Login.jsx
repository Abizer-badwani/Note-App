import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginReq } from '../utils/UserReq'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

import '../css/userForm.css'
import { UserState } from '../context/UserCotext'

const Login = () => {

  const { userDispatch } = UserState()
  const [user, setUser] = useState({ email: "", password: "" })
  const handleChange = (e) => setUser(prev => ({ ...prev, [e.target.name]: e.target.value }))
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await loginReq(user)

      if (response) {
        const { data } = response
        
        if (data?.success) {
          const {email} = data?.user
          toast.success(data?.message)
          userDispatch({type: 'LOGIN', payload: email})
          return navigate('/', {replace: true})
        }
        else {
          toast.error(data?.message)
        }
      }
    }
    catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className='form-container'>
      <h1 className='form-title'>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder='Enter Email' name='email' value={user.email} onChange={handleChange} autoComplete='off' />
        <input type="password" placeholder='Enter Password' name='password' value={user.password} onChange={handleChange} autoComplete='off' />
        <button type="submit">Login</button>
      </form>
      <Link className='refer' to='/auth/register'>Signup</Link>
    </div>
  )
}

export default Login
