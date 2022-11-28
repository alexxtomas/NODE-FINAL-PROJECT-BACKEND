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
      Desktop: Entities.App.PCs.Desktop(mongoose),
      Laptop: Entities.App.PCs.Laptop(mongoose)
    },
    Peripherals: {
      Keyboard: Entities.App.Peripherals.Keyboard(mongoose),
      Mouse: Entities.App.Peripherals.Mouse(mongoose)
    },
    Users: {
      Comment: Entities.App.Users.Comment(mongoose),
      Role: Entities.App.Users.Role(mongoose),
      User: Entities.App.Users.User(mongoose)
    },
    Categories: Entities.App.Categories(mongoose)
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
