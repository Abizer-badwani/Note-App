import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'

import { MongoConnect } from './config/db.js'
import auth_router  from './routes/auth.js'
import user_router  from './routes/user.js'
import note_router  from './routes/note.js'
import verifyUser   from './middlewares/verifyUser.js'

const app = express()

MongoConnect()

const allowHeaders = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://note-app-client-abizer-badwani.vercel.app'),
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'),
    res.header('Access-Control-Allow-Headers', 'Content-Type'),

    next()
}

app.use(cors({
  origin: 'https://note-app-client-abizer-badwani.vercel.app',
  methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
  credentials: true
}))

app.use(allowHeaders())

app.use(express.json())
app.use(cookieParser())
app.use(morgan('tiny'))


app.get('/', (req, res) => {
  res.json('Hello')
})

app.use('/auth', auth_router)
app.use('/user', verifyUser, user_router)
app.use('/note', verifyUser, note_router)

app.listen(6969)
