import { Router } from 'express'
import { getApiInfo } from '../domain/service/ApiInfo.js'

const router = Router()

router.get('/', getApiInfo)

export default router
