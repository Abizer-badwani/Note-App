import axios from 'axios'
import { toast } from 'react-hot-toast'

export const signupReq = async (user) => {
    try {
        return await axios.post('https://note-app-chi-livid.vercel.app/auth/register', user)
    } catch (error) {
        toast.error(error.message)
    }
}

export const loginReq = async (user) => {
    try {
        return await axios.post('https://note-app-chi-livid.vercel.app/auth/login', user)
    } catch (error) {
        toast.error(error.message)
    }
}

export const logoutReq = async () => {
    try {
        return await axios.get('https://note-app-chi-livid.vercel.app/auth/logout')
    } catch (error) {
        toast.error(error.message)
    }
}

export const userDetails = async () => {
    try {
        axios.defaults.withCredentials = true
        return await axios.get('https://note-app-chi-livid.vercel.app/user/profile')
    }
    catch (error) {
        toast.error(error.message)
    }
}