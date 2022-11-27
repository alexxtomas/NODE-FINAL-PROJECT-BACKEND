import { Router } from 'express'
import validateFields from '../domain/service/User/middlewares/validateFields.js'
import Users from '../domain/service/User/User.js'

const router = Router()

router.get('/users', Users.getAll)
router.post('/users', validateFields.createOne, Users.createOne)

export default router
