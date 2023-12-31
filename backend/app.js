import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import { MongoConnect } from './config/db.js'
import auth_router  from './routes/auth.js'
import user_router  from './routes/user.js'
import note_router  from './routes/note.js'
import verifyUser   from './middlewares/verifyUser.js'

const app = express()

MongoConnect()

app.use(cors({
  origin: ["https://note-app-client-10nr.onrender.com"],
  methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
  credentials: true
}))

app.use(express.json())
app.use(cookieParser())


app.get('/', (req, res) => {
  res.json('Hello')
})

app.use('/auth', auth_router)
app.use('/user', verifyUser, user_router)
app.use('/note', verifyUser, note_router)

app.listen(6969)
