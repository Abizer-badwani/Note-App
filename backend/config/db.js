import mongoose from 'mongoose'

const URL = 'mongodb+srv://badwaniwalaabizer:bXOArLCACB4Q68Yi@notecluster.26wps4t.mongodb.net/NotesDB?retryWrites=true&w=majority'
// const URL = 'mongodb://127.0.0.1/Notes'
export const MongoConnect = () => {
    try {
        mongoose.connect(URL, { useNewUrlParser: true });    
        console.log("DB Connected!")
    } catch (error) {
        console.log(error)
    }
}

// bXOArLCACB4Q68Yi