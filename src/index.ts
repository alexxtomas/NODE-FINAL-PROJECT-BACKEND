import * as dotenv from 'dotenv'
import express, {
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response
} from 'express'
import 'express-async-errors'
import * as Log from './shared/console/logs'
dotenv.config()

const app = express()

app.use(express.json())

// app.use(errHandler)

app.listen(process.env.PORT, () =>
  Log.Danger(`server  on port ${process.env.PORT}`)
)
