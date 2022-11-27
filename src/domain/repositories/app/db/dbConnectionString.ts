import * as dotenv from 'dotenv'

dotenv.config()

type Environment = 'production' | 'testing' | 'development' | undefined

const environment: Environment = process.env.NODE_ENV as Environment

if (!environment) throw new Error('No environment provided')

const dbConnectionString =
  environment === 'development'
    ? process.env.MONGODB_URI
    : process.env.MONGODB_URI_TESTING

if (!dbConnectionString) throw new Error('No db connection provided')

export { dbConnectionString }
