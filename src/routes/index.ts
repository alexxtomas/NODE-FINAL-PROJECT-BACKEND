import { Express } from 'express-serve-static-core'
import userRouter from '../controller/users.js'

export const routes = (server: Express) => {
  server.use('/api', userRouter)
}
