import { NextFunction, Request, Response } from 'express'
import * as Console from '../../shared/console/logs.js'

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  Console.Danger(err)
}
