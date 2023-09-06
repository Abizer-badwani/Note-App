import axios from "axios"
import toast from 'react-hot-toast'

export const getNotes = async () => {
    try {
        axios.defaults.withCredentials = 'include'
        const { data } = await axios.get('https://note-app-server-abizer-badwani.vercel.app/note/')
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
        axios.defaults.withCredentials = 'include'
        return await axios.delete(`https://note-app-server-abizer-badwani.vercel.app/note/delete`, { data: { _id } })
    } catch (error) {
        toast.error(error.message)
    }
}

export const createNote = async (title) => {
    try {
        axios.defaults.withCredentials = 'include'
        return await axios.post('https://note-app-server-abizer-badwani.vercel.app/note/create', { title })
    } catch (error) {
        toast.error(error.message)
    }
}

