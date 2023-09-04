import express      from 'express'
import cors         from 'cors'
import cookieParser from 'cookie-parser'

import './config/db.js'
import auth_router  from './routes/auth.js'
import user_router  from './routes/user.js'
import note_router  from './routes/note.js'
import verifyUser   from './middlewares/verifyUser.js'

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: *,
  methods: ["GET", "POST", "PUT", "DELETE"],
  Access-Control-Allow-Origin: *,
  credentials: true
}))

app.get('/', (req, res) => {
  res.json('Hello')
})

app.use('/auth', auth_router)
app.use('/user', verifyUser, user_router)
app.use('/note', verifyUser, note_router)

app.listen(6969)
