import { Express } from 'express-serve-static-core'
import appController from '../controller/app/controller.js'
import authController from '../controller/auth/controller.js'

export const routes = ({
  serverName,
  server
}: {
  serverName: 'auth' | 'app'
  server: Express
}) => {
  if (serverName === 'app') server.use('/api', appController)
  else server.use('/auth', authController)
}
