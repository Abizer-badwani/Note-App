import axios from 'axios'
import { toast } from 'react-hot-toast'

export const signupReq = async (user) => {
    try {
        axios.defaults.withCredentials = true
        return await axios.post('http://localhost:6969/auth/register', user)
    } catch (error) {
        toast.error(error.message)
    }
}

export const loginReq = async (user) => {
    try {
        axios.defaults.withCredentials = true
        return await axios.post('http://localhost:6969/auth/login', user)
    } catch (error) {
        toast.error(error.message)
    }
}

export const logoutReq = async () => {
    try {
        axios.defaults.withCredentials = true
        return await axios.get('http://localhost:6969/auth/logout')
    } catch (error) {
        toast.error(error.message)
    }
}

export const userDetails = async () => {
    try {
        axios.defaults.withCredentials = true
        return await axios.get('http://localhost:6969/user/profile')
    }
    catch (error) {
        toast.error(error.message)
    }
}
