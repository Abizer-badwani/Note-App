import axios from 'axios'
import { toast } from 'react-hot-toast'

export const signupReq = async (user) => {
    try {
        axios.defaults.withCredentials = true
        return await axios.post('https://note-app-server-abizer-badwani.vercel.app/auth/register', user)
    } catch (error) {
        toast.error(error.message)
    }
}

export const loginReq = async (user) => {
    try {
        axios.defaults.withCredentials = true
        return await axios.post('https://note-app-server-abizer-badwani.vercel.app/auth/login', user)
    } catch (error) {
        toast.error(error.message)
    }
}

export const logoutReq = async () => {
    try {
        axios.defaults.withCredentials = true
        return await axios.get('https://note-app-server-abizer-badwani.vercel.app/auth/logout')
    } catch (error) {
        toast.error(error.message)
    }
}

export const userDetails = async () => {
    try {
        axios.defaults.withCredentials = true
        return await axios.get('https://note-app-server-abizer-badwani.vercel.app/user/profile')
    }
    catch (error) {
        toast.error(error.message)
    }
}
