import { get } from './ApiInfo.js'
import { createOne, getAll, getByEmail } from './Users.js'

export const Users = {
  getAll,
  createOne,
  getByEmail
}

export const ApiInfo = {
  get
}
