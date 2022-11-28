import { Router } from 'express'
import { login } from '../../domain/service/auth/login.js'
import { token } from '../../domain/service/auth/token.js'
const router = Router()
router.post('/token', token)
router.post('/login', login)

export default router
