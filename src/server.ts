import express, {Request, Response, NextFunction} from 'express'
import 'dotenv/config'

import connectDB from './config/db'
import authRoutes from './routes/authRoutes'
import taskRoutes from './routes/taskRoutes'
import userRoutes from './routes/userRoutes'
import passport from './middlewares/authentication'

const app = express()
const PORT = process.env.PORT || 3000

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(passport.initialize())

app.get('/', (req, res) => {
	res.send('Api is running')
})

// Routes
app.use('/auth', authRoutes)
app.use('/task', taskRoutes)
app.use('/user', userRoutes)

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	console.error(err.stack)
	res.status(500).json({error: 'Internal Server Error'})
})

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`)
})
