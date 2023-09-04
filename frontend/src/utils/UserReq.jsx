import axios from 'axios'
import { toast } from 'react-hot-toast'

export const signupReq = async (user) => {
    try {
        axios.defaults.withCredentials = true
        return await axios.post('/auth/register', user)
    } catch (error) {
        toast.error(error.message)
    }
}

export const loginReq = async (user) => {
    try {
        axios.defaults.withCredentials = true
        return await axios.post('/auth/login', user)
    } catch (error) {
        toast.error(error.message)
    }
}

export const logoutReq = async () => {
    try {
        axios.defaults.withCredentials = true
        return await axios.get('/auth/logout')
    } catch (error) {
        toast.error(error.message)
    }
}

export const userDetails = async () => {
    try {
        axios.defaults.withCredentials = true
        return await axios.get('/user/profile')
    }
    catch (error) {
        toast.error(error.message)
    }
}
