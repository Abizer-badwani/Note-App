import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signupReq } from '../utils/UserReq'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import {UserState} from '../context/UserCotext'
import '../css/userForm.css'

const Signup = () => {

  const {dispatch} = UserState()
  const [user, setUser] = useState({ username: "", email: "", password: "" })
  const handleChange = (e) => setUser(prev => ({ ...prev, [e.target.name]: e.target.value }))
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await signupReq(user)

      if (response) {
        const {data} = response

        if (data?.success) {
          const {email} = data?.user
          dispatch({type: 'LOGIN', payload : email})
          toast.success(data?.message)
          return navigate('/')
        }
        else {
          toast.error(data?.message)
        }
      }
      

    } catch (error) {
      toast.error(error.message)
    }

  }

  return (
    <div className='form-container'>
      <h1 className='form-title'>signup</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Username' name='username' value={user.username} onChange={handleChange} autoComplete='off' />
        <input type="email" placeholder='Enter Email' name='email' value={user.email} onChange={handleChange} autoComplete='off' />
        <input type="password" placeholder='Enter Password' name='password' value={user.password} onChange={handleChange} autoComplete='off' />
        <button type="submit">Signup</button>
      </form>
      <Link className='refer' to='/auth/login'>Login</Link>
    </div>
  )
}

export default Signup
