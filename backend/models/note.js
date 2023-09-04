import mongoose from 'mongoose'

const NoteSchema = new mongoose.Schema({
    noteTitle: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true,
    }
})

export default new mongoose.model('Note', NoteSchema)