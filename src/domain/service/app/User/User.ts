import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import Password from '../../../../shared/password.js'
import { SendMail } from '../../../../shared/sendMail.js'
import { Server } from '../../../../shared/server/indext.js'
import { Users } from '../../../orm/app/index.js'

const getAll = async (req: Request, res: Response) => {
  try {
    const users = await Users.getAll()

    Server.Response(res, {
      error: false,
      data: users,
      code: users.length > 0 ? Server.Status.OK : Server.Status.NO_CONTENT
    })
  } catch (e) {
    throw new Error('Cannot service all users')
  }
}

const createOne = async (req: Request, res: Response) => {
  const { username, role, email, password } = req.body

  const encryptedPassword = await Password.encrypt(password)

  const newUser = {
    username,
    email,
    password: encryptedPassword,
    role: role || 'user',
    isActivate: false,
    comments: []
  }
  try {
    const createdUser = await Users.createOne(newUser)

    const { NODE_ENV, APP_PORT, EMAIL_SECRET } = process.env

    if (!NODE_ENV) throw new Error('No environment provided')
    if (!APP_PORT) throw new Error('No port provided')
    if (!EMAIL_SECRET) throw new Error('No token provided for email route')

    // HERE
    jwt.sign(
      { userId: createdUser?.id },
      EMAIL_SECRET,
      {
        expiresIn: '1d'
      },
      (err, emailToken) => {
        if (err ?? !emailToken) throw new Error('Error creating email token')
        const url =
          NODE_ENV === 'production'
            ? `https://mydomain.com/api/confirmation/${emailToken}`
            : `http://localhost:${APP_PORT}/api/confirmation/${emailToken}`
        const htmlMessage = `
  <h1>Pleae To Confirm Your Email <a href="${url}" target="_blank">click here</a></h1>
`
        SendMail(
          email,
          'Confirmation Email',
          htmlMessage,
          { html: true },
          (err, data) => {
            if (err) console.error(err)
            else console.log('Email sent successfully')
          }
        )
      }
    )

    Server.Response(res, { data: createdUser, code: Server.Status.CREATED })
  } catch (error) {
    console.error(error)
    Server.Response(res, {
      error: true,
      code: Server.Status.INTERNAL_SERVER_ERROR,
      message: 'Something went wrong'
    })
  }
}

export const confirmEmail = async (req: Request, res: Response) => {
  try {
    const { EMAIL_SECRET } = process.env
    if (!EMAIL_SECRET) throw new Error('No email secret key provided')
    const user: any = jwt.verify(req.params.token, EMAIL_SECRET)
    if (!user)
      Server.Response(res, {
        error: true,
        code: Server.Status.UNAUTHORIZED,
        message: 'Unauthorized for this action'
      })
    const verifiedUser = await Users.updateUser(user.userId, {
      isActivate: true
    })

    Server.Response(res, {
      code: Server.Status.OK,
      data: verifiedUser
    })
  } catch (error) {
    Server.Response(res, {
      code: Server.Status.NOT_ACEPTABLE,
      message: error instanceof Error ? error.message : 'Something went wrong ',
      error: true
    })
  }
}

export default { getAll, createOne, confirmEmail }
