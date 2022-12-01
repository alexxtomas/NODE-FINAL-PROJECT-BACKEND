import { Router } from 'express'
import { getApiInfo } from '../../domain/service/app/ApiInfo.js'
import Desktop from '../../domain/service/app/Products/PCs/Desktop.js'
import Laptops from '../../domain/service/app/Products/PCs/Laptops.js'
import Keyboards from '../../domain/service/app/Products/Peripherals/Keyboards.js'
import Mice from '../../domain/service/app/Products/Peripherals/Mice.js'
import Users from '../../domain/service/app/Users.js'
import { middleware } from './middlewares/index.js'

const router = Router()

router.get('/', getApiInfo)

// Users
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
router.get('/confirmation/:token', Users.confirmEmail)

// Products
router.get('/products/peripherals/keyboards', Keyboards.getAll)
router.get('/products/peripherals/mice', Mice.getAll)
router.get('/products/pc/laptop', Laptops.getAll)
router.get('/products/pc/desktop', Desktop.getAll)

// router.post(
//   '/products/peripherals/keyboards',
//   [middleware.tokenValidator, middleware.isAdmin],
//   Keyboards.createOne()
// )
// router.post(
//   '/products/peripherals/mice',
//   [middleware.tokenValidator, middleware.isAdmin],
//   Mice.createOne()
// )
// router.post(
//   '/products/pc/laptop',
//   [middleware.tokenValidator, middleware.isAdmin],
//   Laptops.createOne()
// )
// router.post(
//   '/products/pc/desktop',
//   [middleware.tokenValidator, middleware.isAdmin],
//   Desktop.createOne()
// )

export default router
