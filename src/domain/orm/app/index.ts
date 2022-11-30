import { get } from './ApiInfo.js'
import {
  createOne,
  getAll,
  getByEmail,
  getByUsername,
  updateUser
} from './Users.js'

export const Users = {
  getAll,
  createOne,
  getByEmail,
  updateUser,
  getByUsername
}

export const ApiInfo = {
  get
}
