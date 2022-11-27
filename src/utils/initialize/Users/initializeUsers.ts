import { appDB } from '../../../domain/repositories/index.js'

export const initializeUsers = async () => {
  try {
    const count = await appDB.Users.User.estimatedDocumentCount()

    if (count > 0) return

    await Promise.all([
      new appDB.Users.User({
        username: 'Juan',
        email: 'juan@gmail.com',
        password: '123',
        comments: [],
        role: 'user',
        isActivate: false
      }).save(),
      new appDB.Users.User({
        username: 'Pepe',
        email: 'pepe@gmail.com',
        password: '123',
        comments: [],
        role: 'moderator',
        isActivate: false
      }).save(),
      new appDB.Users.User({
        username: 'Alex',
        email: 'alex@gmail.com',
        password: '123',
        comments: [],
        role: 'admin',
        isActivate: false
      }).save()
    ])
  } catch (e) {
    console.error(e)
  }
}
