import { Request, Response } from 'express'
import { Status } from '../../../shared/server/status.js'
import { Users } from '../../orm/index.js'

const getAll = async (req: Request, res: Response) => {
  console.log('a')
  try {
    const users = await Users.getAll()

    res.status(users.length > 0 ? Status.OK : Status.NO_CONTENT).json(users)
  } catch (e) {
    throw new Error('Cannot service all users')
  }
}

const createOne = async (req: Request, res: Response) => {
  const { username, role, email, password } = req.body

  const newUser = {
    username,
    email,
    password,
    role: role || 'user',
    isActivate: false,
    comments: []
  }

  const user = await Users.createOne(newUser)

  res.status(Status.CREATED).json(user)
}

export default { getAll, createOne }
