import { useMutation, useQuery } from "react-query";
import { createNote, deleteNote, getNotes } from "./NoteReq";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";

export const GetNotes = () => useQuery('notes', getNotes)

export const DeleteNote = () => {
    const queryClient = useQueryClient()
    return useMutation((id) => deleteNote(id), {
        onSuccess: ({ data }) => {
            if (data?.success) {
                queryClient.invalidateQueries('notes')
                toast.success(data?.message)
            }
            else {
                toast.error(data?.message)
            }
        },
        onError: (error) => {
            console.log(error)
            toast.error(error.message)
        }
    })
}

export const CreateNote = () => {
    const queryClient = useQueryClient()
    return useMutation((title) => createNote(title), {
        onSuccess: ({ data }) => {
            if (data?.success) {
                queryClient.invalidateQueries('notes')
            console.log(data)
            toast.success(data?.message)
            }
            else {
                toast.error(data?.message)
            }
        },
        onError: (error) => {
            console.log(error)
            toast.error(error.message)
        }
    })
}
