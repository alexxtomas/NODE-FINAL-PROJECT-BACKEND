import { createOneUser } from './fieldsValidator.js'
import { isAdmin } from './isAdmin.js'
import { tokenValidator } from './tokenValidator.js'

export const middleware = {
  createOneUser,
  isAdmin,
  tokenValidator
}
