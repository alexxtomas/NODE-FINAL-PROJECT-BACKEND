import { get } from './ApiInfo.js'
import { PCs } from './Products/PCs.js'
import { Peripherals } from './Products/Peripherals.js'
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

export const Products = {
  Peripherals,
  PCs
}

export const ApiInfo = {
  get
}
