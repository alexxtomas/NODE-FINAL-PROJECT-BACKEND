import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import { routes } from '../routes/index.js'
import { initialize } from '../utils/initialize/index.js'

const app = express()

await initialize()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

routes({ serverName: 'app', server: app })

export default app
