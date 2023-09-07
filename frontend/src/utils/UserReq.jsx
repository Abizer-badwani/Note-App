import axios from 'axios'
import { toast } from 'react-hot-toast'

axios.defaults.withCredentials = true

export const signupReq = async (user) => {
    try {
        return await axios.post('https://note-app-server-abizer-badwani.vercel.app/auth/register', user)
    } catch (error) {
        toast.error(error.message)
    }
}

export const loginReq = async (user) => {
    try {
        return await axios.post('https://note-app-server-abizer-badwani.vercel.app/auth/login', user)
    } catch (error) {
        toast.error(error.message)
    }
}

export const logoutReq = async () => {
    try {
        return await axios.get('https://note-app-server-abizer-badwani.vercel.app/auth/logout')
    } catch (error) {
        toast.error(error.message)
    }
}

export const userDetails = async () => {
    try {
        return await axios.get('https://note-app-server-abizer-badwani.vercel.app/user/profile')

    }
    catch (error) {
        toast.error(error.message)
    }
}
