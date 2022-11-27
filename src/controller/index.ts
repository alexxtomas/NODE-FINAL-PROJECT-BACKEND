import { Router } from 'express'
import { getApiInfo } from '../domain/service/ApiInfo.js'
import Users from '../domain/service/User/User.js'
import fieldsValidator from './middlewares/fieldsValidator.js'

const router = Router()

router.get('/', getApiInfo)

router.get('/users', Users.getAll)
router.post('/users', fieldsValidator.createOneUser, Users.createOne)

export default router
