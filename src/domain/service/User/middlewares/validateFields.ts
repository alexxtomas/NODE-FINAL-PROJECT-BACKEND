import { body } from 'express-validator'
// import { Users } from '../../orm'

const getAll = () => {}

const createOne = () => {
  body('username')
    .isString()
    .custom((value) => {})
  body('email').normalizeEmail().isEmail()
  body('role')
    .optional()
    .custom((value) => value === 'admin' || 'moderator' || 'user')
  body('password').isStrongPassword()
}
export default { getAll, createOne }
