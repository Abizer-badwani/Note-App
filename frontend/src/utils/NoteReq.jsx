import axios from "axios"
import toast from 'react-hot-toast'

axios.defaults.withCredentials = true

export const getNotes = async () => {
    try {
        const { data } = await axios.get('https://note-app-server-three.vercel.app/note/')
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
        return await axios.delete('https://note-app-server-three.vercel.app/note/delete', {data: { _id }})
    } catch (error) {
        toast.error(error.message)
    }
}

export const createNote = async (title) => {
    try {
        return await axios.post('https://note-app-server-three.vercel.app/note/create', { title })
    } catch (error) {
        toast.error(error.message)
    }
}
