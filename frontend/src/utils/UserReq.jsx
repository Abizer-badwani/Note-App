import axios from 'axios'
import { toast } from 'react-hot-toast'

axios.defaults.withCredentials = true
const URL = 'https://note-app-server-hlbz.onrender.com'

export const signupReq = async (user) => {
    try {
        return await axios.post(`${URL}/auth/register`, user)
    } catch (error) {
        toast.error(error.message)
    }
}

export const loginReq = async (user) => {
    try {
        return await axios.post(`${URL}/auth/login`, user)
    } catch (error) {
        toast.error(error.message)
    }
}

export const logoutReq = async () => {
    try {
        return await axios.get(`${URL}/auth/logout`)
    } catch (error) {
        toast.error(error.message)
    }
}

export const userDetails = async () => {
    try {
        return await axios.get(`${URL}/user/profile`)
    }
    catch (error) {
        toast.error(error.message)
    }
}
