import { Express } from 'express-serve-static-core'
import appController from '../controller/index.js'

export const routes = (server: Express) => {
  server.use('/api', appController)
}
