import axios from "axios"
import toast from 'react-hot-toast'

axios.defaults.withCredentials = true
const URL = 'https://note-app-server-hlbz.onrender.com'

export const getNotes = async () => {
    try {
        const { data } = await axios.get(`${URL}/note/`)
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
        return await axios.delete(`${URL}/note/delete`, {data: { _id }})
    } catch (error) {
        toast.error(error.message)
    }
}

export const createNote = async (title) => {
    try {
        return await axios.post(`${URL}/note/create`, { title })
    } catch (error) {
        toast.error(error.message)
    }
}
