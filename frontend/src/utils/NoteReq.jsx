import axios from "axios"
import toast from 'react-hot-toast'

axios.defaults.withCredentials = true

export const getNotes = async () => {
    try {
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
        return await axios.delete('http://localhost:6969/note/delete', {data: { _id }})
    } catch (error) {
        toast.error(error.message)
    }
}

export const createNote = async (title) => {
    try {
        return await axios.post('http://localhost:6969/note/create', { title })
    } catch (error) {
        toast.error(error.message)
    }
}
