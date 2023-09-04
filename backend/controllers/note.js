import note_model from "../models/note.js"

const getNotes = async (req, res) => {
    try {
        const { id } = req.user
        const notes = await note_model.find({ author: id }).select('noteTitle')

        if (!notes) { return res.json({ success: false }) }

        return res.json({success: true, notes})
    }
    catch (error) {
        console.log(error.message)
        return res.json({success: false, message: "Server Error, Try Again!"})
    }
}

const createNote = async (req, res) => {
    try {
        const { id } = req.user
        const { title } = req.body
        
        if (!title) { return res.json({ success: false, message: "Enter Note Text!" }) }

        await note_model.create({noteTitle: title, author: id})
          
        return res.json({ success: true, message: 'Note Created Successful!' }) 
    }
    catch (error) {
        console.log(error.message)
        return res.status(500).json({ success: false, message: "Server Error, Try Again!" })
    }
}

const deleteNote = async (req, res) => {
    try {
        const { id } = req.user
        const { _id } = req.body
        
        if (!_id) { return res.json({ success: false, message: 'Note is Required!' }) }
        const deletedNote = await note_model.deleteOne({ _id, author: id })   

        if (!deletedNote) { return res.json({ success: false, message: 'Note Not Found!' }) }
        return res.json({ success: true, message: 'Note Deleted Successful!' })
    }
    catch (error) {
        console.log(error.message)
        return res.json({success: false,message: "Server Error. Try Again!"})
    }
 }


export {getNotes, createNote, deleteNote}