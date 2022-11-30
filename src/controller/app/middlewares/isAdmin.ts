import { NextFunction, Request, Response } from 'express'
import { Server } from '../../../shared/server/indext.js'

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  const { user } = req?.user ?? null

  if (!user)
    return Server.Response(res, {
      code: Server.Status.UNAUTHORIZED,
      error: true,
      message: 'No authorization provided'
    })

  if (user.role !== 'admin')
    return Server.Response(res, {
      code: Server.Status.UNAUTHORIZED,
      error: true,
      message: 'You do not have permissions to have perform this action'
    })

  next()
}
