import axios from 'axios'
import { toast } from 'react-hot-toast'


export const signupReq = async (user) => {
    try {
        return await axios.post('http://localhost:6969/auth/register', user, {
            withCredentials: true,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Content-Type': 'application/json',
            },
        })
    } catch (error) {
        toast.error(error.message)
    }
}

export const loginReq = async (user) => {
    try {
        return await axios.post('http://localhost:6969/auth/login', user, {
            withCredentials: true,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Content-Type': 'application/json',
            },
        })
    } catch (error) {
        toast.error(error.message)
    }
}

export const logoutReq = async () => {
    try {
        return await axios.get('http://localhost:6969/auth/logout', {
            withCredentials: true,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Content-Type': 'application/json',
            }
        })
    } catch (error) {
        toast.error(error.message)
    }
}

export const userDetails = async () => {
    try {
        return await axios.get('http://localhost:6969/user/profile', {
            withCredentials: true,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Content-Type': 'application/json',
            }
        })

    }
    catch (error) {
        toast.error(error.message)
    }
}
