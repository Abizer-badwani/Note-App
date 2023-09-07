import axios from 'axios'
import { toast } from 'react-hot-toast'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://note-app-server-abizer-badwani.vercel.app/'
})

export const signupReq = async (user) => {
    try {
        axios.defaults.withCredentials = true
        return await instance.post('auth/register', user)
    } catch (error) {
        toast.error(error.message)
    }
}

export const loginReq = async (user) => {
    try {
        axios.defaults.withCredentials = true
        return await instance.post('auth/login', user)
    } catch (error) {
        toast.error(error.message)
    }
}

export const logoutReq = async () => {
    try {
        axios.defaults.withCredentials = true
        return await instance.get('/auth/logout')
    } catch (error) {
        toast.error(error.message)
    }
}

export const userDetails = async () => {
    try {
        axios.defaults.withCredentials = true
        return await instance.get('user/profile')
    }
    catch (error) {
        toast.error(error.message)
    }
}
