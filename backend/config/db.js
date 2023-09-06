import mongoose from 'mongoose'

const URL = 'mongodb+srv://badwaniwalaabizer:bXOArLCACB4Q68Yi@notecluster.26wps4t.mongodb.net/NotesDB?retryWrites=true&w=majority'

export const MongoConnect = () => {
    try {
        mongoose.connect(URL, {useNewUrlParser: true});         
    } catch (error) {
        console.log(error)
    }
}

// bXOArLCACB4Q68Yi