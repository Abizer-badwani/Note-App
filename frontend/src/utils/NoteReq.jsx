import axios from "axios"
import toast from 'react-hot-toast'

export const getNotes = async () => {
    try {
        axios.defaults.withCredentials = true
        const { data } = await axios.get('https://note-app-chi-livid.vercel.app/note/')
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
        return await axios.delete(`https://note-app-chi-livid.vercel.app/note/delete`, { data: { _id } })
    } catch (error) {
        toast.error(error.message)
    }
}

export const createNote = async (title) => {
    try {
        axios.defaults.withCredentials = true
        return await axios.post('https://note-app-chi-livid.vercel.app/note/create', { title })
    } catch (error) {
        toast.error(error.message)
    }
}

