import { IUser } from '../../entities/types.js'
import { appDB } from '../../repositories/index.js'

export const getAll = async () => {
  try {
    return await appDB.Users.User.find()
  } catch (e) {
    throw new Error('Cannot get all users')
  }
}

export const createOne = async (newUser: IUser) => {
  try {
    const user = await new appDB.Users.User(newUser)
    return await user.save()
  } catch (e) {
    console.error(e)
  }
}

export const getByEmail = async (email: string) => {
  try {
    return await appDB.Users.User.findOne({ email })
  } catch (e) {
    console.error(e)
  }
}

export const getByUsername = async (username: string) => {
  try {
    return await appDB.Users.User.findOne({ username })
  } catch (e) {
    console.error(e)
  }
}

type ToUpdateParam<T> = { [K in keyof T]?: T[K] }
// type UpdateUser = (id: string, toUpdate: ToUpdateParam<IUser>): Error |
export const updateUser = async (
  id: string,
  toUpdate: ToUpdateParam<IUser>
) => {
  try {
    return await appDB.Users.User.findByIdAndUpdate(id, toUpdate, {
      new: true,
      lean: true
    })
  } catch (e) {}
}
