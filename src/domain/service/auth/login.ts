import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import Password from '../../../shared/Password.js'
import { Server } from '../../../shared/server/indext.js'
import { IUser } from '../../entities/types.js'
import { Users } from '../../orm/app/index.js'
import { authDb } from '../../repositories/index.js'

export const genereteAccessToken = (user: IUser) => {
  const { ACCES_TOKEN_SECRET } = process.env
  if (!ACCES_TOKEN_SECRET) throw new Error('No access token provided')
  return jwt.sign({ user }, ACCES_TOKEN_SECRET, {
    expiresIn: '30s'
  })
}

export const login = async (req: Request, res: Response) => {
  const { email } = req.body
  const { password } = req.body
  const user = await Users.getByEmail(email)

  if (!user)
    return Server.Response(res, {
      code: Server.Status.BAD_REQUEST,
      error: true,
      message: 'User Not found'
    })

  const matchPassword = await Password.compare(password, user.password)

  if (!matchPassword)
    return Server.Response(res, {
      error: true,
      code: Server.Status.BAD_REQUEST,
      message: 'Invalid Password'
    })

  const { ACCES_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = process.env
  if (!ACCES_TOKEN_SECRET || !REFRESH_TOKEN_SECRET)
    throw new Error('No passwords provided for token creation')

  const accessToken = genereteAccessToken(user.toJSON())

  const refreshToken = jwt.sign(user.toJSON(), REFRESH_TOKEN_SECRET)

  await authDb.collection('refresh-tokens').add({
    refreshToken
  })

  Server.Response(res, {
    data: { accessToken, refreshToken },
    code: Server.Status.OK
  })
}
