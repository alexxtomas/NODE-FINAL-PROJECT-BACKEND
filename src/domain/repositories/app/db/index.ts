import mongoose from 'mongoose'
import * as Console from '../../../../shared/console/logs.js'
import { Entities } from '../../../entities/index.js'
import connection from './connection.js'
import { dbConnectionString } from './dbConnectionString.js'
import { IDB } from './type.js'

if (!dbConnectionString) throw new Error('No connection string provided')
let db: IDB
try {
  await connection(dbConnectionString)
  db = {
    PCs: {
      Desktop: Entities.PCs.Desktop(mongoose),
      Laptop: Entities.PCs.Laptop(mongoose)
    },
    Peripherals: {
      Keyboard: Entities.Peripherals.Keyboard(mongoose),
      Mouse: Entities.Peripherals.Mouse(mongoose)
    },
    Users: {
      Comment: Entities.Users.Comment(mongoose),
      Role: Entities.Users.Role(mongoose),
      User: Entities.Users.User(mongoose)
    },
    Categories: Entities.Categories(mongoose)
  }
  Console.Info('Connected to db')

  // Users
} catch (e) {
  if (e instanceof Error) {
    throw new Error(e.message)
  }
  throw new Error('Error connecting to db')
}

export default db
