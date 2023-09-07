import axios from "axios"
import toast from 'react-hot-toast'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://note-app-server-abizer-badwani.vercel.app'
})

export const getNotes = async () => {
    try {
        axios.defaults.withCredentials = true
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
        axios.defaults.withCredentials = true
        return await axios.delete(`https://note-app-server-abizer-badwani.vercel.app/note/delete`, { data: { _id } })
    } catch (error) {
        toast.error(error.message)
    }
}

export const createNote = async (title) => {
    try {
        axios.defaults.withCredentials = true
        return await axios.post('https://note-app-server-abizer-badwani.vercel.app/note/create', { title })
    } catch (error) {
        toast.error(error.message)
    }
}

