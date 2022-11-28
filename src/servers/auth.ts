import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import { routes } from '../routes/index.js'

const auth = express()

auth.use(cors())
auth.use(morgan('dev'))
auth.use(express.json())
auth.use(express.urlencoded({ extended: true }))

routes({ serverName: 'auth', server: auth })

export default auth
