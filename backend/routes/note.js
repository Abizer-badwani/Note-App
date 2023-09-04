
import express from 'express'
import { createNote, deleteNote, getNotes } from '../controllers/note.js'

const router = express.Router()

router.get('/', getNotes)
router.post('/create', createNote)
router.delete('/delete', deleteNote)

export default router