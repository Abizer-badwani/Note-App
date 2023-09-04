import React, { useState } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import '../css/noteForm.css'
import { CreateNote } from '../utils/NoteQueries'


const NoteForm = () => {
  const [title, setTitle] = useState('')
  const { mutate } = CreateNote()

    const handleCreate = (event, title) => {
    event.preventDefault()
      mutate(title)
      setTitle('')
  }
  
  return (
    <form className='create-note' onSubmit={(event) => handleCreate(event, title)}>
      <input type="text" value={title} placeholder='Enter Your Note' onChange={(event) => setTitle(event.target.value)} autoComplete='off' />
      <button type='submit'><FiArrowRight size='25' /></button>
    </form>
  )
}

export default NoteForm