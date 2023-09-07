import axios from "axios"
import toast from 'react-hot-toast'

export const getNotes = async () => {
    try {
        const { data } = await axios.get('http://localhost:6969/note/',{
            withCredentials: true,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Content-Type': 'application/json',
            },
        })
        if (data?.success) {
            const { notes } = data
            return notes
        }
    } catch (error) {
        toast.error(error.message)
    }
}

export const deleteNote = async (_id) => {
    try {
        return await axios.delete('http://localhost:6969/note/delete', {
            data: { _id },
            headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            'Content-Type': 'application/json',
        },
            withCredentials: true
        })
    } catch (error) {
        toast.error(error.message)
    }
}

export const createNote = async (title) => {
    try {
        return await axios.post('http://localhost:6969/note/create', { title }, {
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

