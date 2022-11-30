import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { Server } from '../../../shared/server/indext.js'

export const tokenValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authorization = req.get('authorization')

  let token = null
  if (authorization?.toLowerCase().startsWith('bearer'))
    token = authorization.substring(7)

  const { ACCES_TOKEN_SECRET } = process.env
  if (!ACCES_TOKEN_SECRET) throw new Error('No Secret Acces provided')
  if (!token)
    return Server.Response(res, {
      error: true,
      code: Server.Status.FORBIDDEN,
      message: 'Missing Tooken'
    })

  jwt.verify(token, ACCES_TOKEN_SECRET, (err, user) => {
    if (err)
      return Server.Response(res, {
        code: Server.Status.FORBIDDEN,
        error: true,
        message: 'Invalid token'
      })
    if (!user) throw new Error('No user in token')
    req.user = user
    next()
  })
}
