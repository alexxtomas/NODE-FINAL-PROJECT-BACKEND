import { Router } from 'express'
import { getApiInfo } from '../domain/service/ApiInfo.js'
import validateFields from '../domain/service/User/middlewares/validateFields.js'
import Users from '../domain/service/User/User.js'

const router = Router()

router.get('/', getApiInfo)

router.get('/users', Users.getAll)
router.post('/users', Users.createOne)

export default router
