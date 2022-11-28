import { Router } from 'express'
import { getApiInfo } from '../../domain/service/app/ApiInfo.js'
import Users from '../../domain/service/app/User/User.js'
import { middleware } from './middlewares/index.js'

const router = Router()

router.get('/', getApiInfo)

router.get(
  '/users',
  [middleware.tokenValidator, middleware.isAdmin],
  Users.getAll
)
router.post(
  '/users',
  [middleware.tokenValidator, middleware.isAdmin, middleware.createOneUser],
  Users.createOne
)

// router.get('/email-verification', )

export default router
