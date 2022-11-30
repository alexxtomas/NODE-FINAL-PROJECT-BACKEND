import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { Server } from '../../../shared/server/indext.js'
import { authDb } from '../../repositories/index.js'
import { genereteAccessToken } from './login.js'
export const token = async (req: Request, res: Response) => {
  const { token } = req.body

  if (!token)
    return Server.Response(res, {
      error: true,
      code: Server.Status.UNAUTHORIZED
    })
  // Interactuar
  const querySnapshot = await authDb.collection('refresh-tokens').get()

  const allrefreshTokens = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    refreshToken: doc.data().refreshToken
  }))
  const foundRefreshToken = allrefreshTokens.find(
    (db) => db.refreshToken === token
  )

  if (!foundRefreshToken)
    return Server.Response(res, {
      code: Server.Status.UNAUTHORIZED,
      message: 'Invalid token',
      error: true
    })
  const { REFRESH_TOKEN_SECRET } = process.env
  if (!REFRESH_TOKEN_SECRET)
    throw new Error('NO password for refresh token provided')

  jwt.verify(token, REFRESH_TOKEN_SECRET, (err: any, user: any) => {
    if (err)
      return Server.Response(res, {
        code: Server.Status.UNAUTHORIZED,
        error: true
      })
    if (user) {
      console.log(user)
      const accessToken = genereteAccessToken(user)
      return Server.Response(res, {
        code: Server.Status.OK,
        data: { accessToken }
      })
    }
  })
}
