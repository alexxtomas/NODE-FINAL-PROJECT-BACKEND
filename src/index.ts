import * as dotenv from 'dotenv'
import app from './servers/app.js'
import auth from './servers/auth.js'
import * as Console from './shared/console/logs.js'

dotenv.config()

const { APP_PORT, AUTH_PORT } = process.env

if (!APP_PORT || !AUTH_PORT) throw new Error('PortS not provided')
app.listen(APP_PORT, () =>
  Console.Info(`App server running on port ${APP_PORT}`)
)
auth.listen(AUTH_PORT, () =>
  Console.Info(`Auth server running on port ${AUTH_PORT}`)
)

app.on('error', (err: any) => Console.Danger(err))
auth.on('error', (err: any) => Console.Danger(err))
