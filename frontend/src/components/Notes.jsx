import React from 'react'
import toast from 'react-hot-toast'
import { MdDeleteOutline } from 'react-icons/md'

import { DeleteNote, GetNotes } from '../utils/NoteQueries'
import { UserState } from '../context/UserCotext'
import '../css/notes.css'

const Notes = () => {
    const userState = UserState()
    const { state } = userState
    
    if (!state?.email) {
        return <></>
    }

    const { isLoading, data, isError, error } = GetNotes()
    const { mutate } = DeleteNote()

        return (
            <div className='notes'>
            {
                isLoading ?
                <div>Loading...</div>
                :
                    isError ?
                    <div>{error.message}</div>
                    :
                        data ?
                        data?.map((note) => {
                            return <li key={note?._id} className='note-items'><span>{note?.noteTitle}</span><MdDeleteOutline onClick={() => mutate(note?._id)} size={'30'} /></li>
                        })
                        :
                            <div>No Notes. Create Now!</div>
            }
        </div>
    )
}

export default Notes