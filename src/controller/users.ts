import { Request, Response, Router } from 'express'
import validateFields from '../domain/services/User/middlewares/validateFields.js'
import Users from '../domain/services/User/User.js'

const router = Router()
router.get('/', (req: Request, res: Response) => {
  res.send('Hello')
})
router.get('/users', validateFields.getAll, Users.getAll)
router.post('/users', validateFields.createOne, Users.createOne)

export default router
