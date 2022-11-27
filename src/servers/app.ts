import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import { routes } from '../routes/index.js'
import { errorHandler } from './middlewares/errorHandler.js'

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

routes(app)

app.use(errorHandler)

export default app