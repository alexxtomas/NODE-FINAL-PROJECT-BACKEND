import * as dotenv from 'dotenv'
import { routes } from './routes/index.js'
import app from './servers/app.js'
import * as Console from './shared/console/logs.js'

dotenv.config()

routes(app)

const { PORT } = process.env

if (!PORT) throw new Error('Port not provided')
app.listen(process.env.PORT, () => Console.Info(`Server  on port ${PORT}`))

app.on('error', (err: any) => Console.Danger(err))
