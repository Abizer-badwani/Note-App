import axios from 'axios'
import { toast } from 'react-hot-toast'

axios.defaults.withCredentials = true

export const signupReq = async (user) => {
    try {
        return await axios.post('http://localhost:6969/auth/register', user)
    } catch (error) {
        toast.error(error.message)
    }
}

export const loginReq = async (user) => {
    try {
        return await axios.post('http://localhost:6969/auth/login', user)
    } catch (error) {
        toast.error(error.message)
    }
}

export const logoutReq = async () => {
    try {
        return await axios.get('http://localhost:6969/auth/logout')
    } catch (error) {
        toast.error(error.message)
    }
}

export const userDetails = async () => {
    try {
        return await axios.get('http://localhost:6969/user/profile')
    }
    catch (error) {
        toast.error(error.message)
    }
}
