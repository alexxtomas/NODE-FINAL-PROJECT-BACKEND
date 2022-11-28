import { NextFunction, Request, Response } from 'express'
import validator from 'validator'
import { Server } from '../../../shared/server/indext.js'
// import { IGetUserAuthInfoRequest } from '../types.js'

export const createOneUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, email, password } = req.body

  try {
    if (!validator.isLength(username, { min: 3, max: 20 }))
      return Server.Response(res, {
        code: Server.Status.BAD_REQUEST,
        error: true,
        message:
          'Username must have minimum 2 characters and maximum of 20 characters'
      })

    if (!validator.isEmail(email))
      return Server.Response(res, {
        code: Server.Status.BAD_REQUEST,
        error: true,
        message: 'The provided email is not a valid email'
      })

    if (
      !validator.isStrongPassword(password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1
      })
    ) {
      return Server.Response(res, {
        code: Server.Status.BAD_REQUEST,
        error: true,
        message:
          'The password requires a minimum of 8 characters, a capital letter, a lower case letter, a special character, and a number'
      })
    }

    next()
  } catch (e) {
    return Server.Response(res, {
      code: Server.Status.BAD_REQUEST,
      message:
        'All the fields must be a string type and username password and email are required. ',
      error: true
    })
  }
}