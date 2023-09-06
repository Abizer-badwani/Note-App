import axios from "axios"
import toast from 'react-hot-toast'

export const getNotes = async () => {
    try {
        axios.defaults.withCredentials = true
        const { data } = await axios.get('http://localhost:6969/note/')
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
        axios.defaults.withCredentials = true
        return await axios.delete(`http://localhost:6969/note/delete`, { data: { _id } })
    } catch (error) {
        toast.error(error.message)
    }
}

export const createNote = async (title) => {
    try {
        axios.defaults.withCredentials = true
        return await axios.post('http://localhost:6969/note/create', { title })
    } catch (error) {
        toast.error(error.message)
    }
}

