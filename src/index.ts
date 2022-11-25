import * as dotenv from 'dotenv'
import express from 'express'
import * as Log from './shared/customLogs'
dotenv.config()

const app = express()

app.listen(process.env.PORT, () => Log.Danger('server '))
