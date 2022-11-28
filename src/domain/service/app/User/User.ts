import { Request, Response } from 'express'
// import jwt from 'jsonwebtoken'
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

  const user = await Users.createOne(newUser)

  const { NODE_ENV } = process.env
  const { APP_PORT } = process.env

  if (!NODE_ENV) throw new Error('No environment provided')
  if (!APP_PORT) throw new Error('No port provided')

  const href =
    NODE_ENV === 'production'
      ? 'https://mydomain.com/email-verification'
      : `http://localhost:${APP_PORT}/email-verification`
  const htmlMessage = `
    <h1>To verify your accout please  <a href="${href}" target="_blank">click here</a></h1>
    
  `

  SendMail(
    email,
    'Email Verification',
    htmlMessage,
    { html: true },
    (err, data) => {
      if (err) console.error(err)
      else console.log('Email sent successfully')
    }
  )

  Server.Response(res, { data: user, code: Server.Status.CREATED })
}

export default { getAll, createOne }
