import axios from "axios"
import toast from 'react-hot-toast'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://note-app-server-abizer-badwani.vercel.app'
})

export const getNotes = async () => {
    try {
        const { data } = await instance.get('note/')
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
        return await instance.delete('note/delete', { data: { _id } })
    } catch (error) {
        toast.error(error.message)
    }
}

export const createNote = async (title) => {
    try {
        return await instance.post('note/create', { title })
    } catch (error) {
        toast.error(error.message)
    }
}

