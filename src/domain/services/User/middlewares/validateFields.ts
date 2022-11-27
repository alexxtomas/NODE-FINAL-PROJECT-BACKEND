import { check } from 'express-validator'
// import { Users } from '../../orm'

const getAll = () => {}

const createOne = () => {
  check('username')
    .isString()
    .custom((value) => {})
  check('email').normalizeEmail().isEmail()
  check('role')
    .optional()
    .custom((value) => value === 'admin' || 'moderator' || 'user')
  check('password').isStrongPassword()
}
export default { getAll, createOne }
