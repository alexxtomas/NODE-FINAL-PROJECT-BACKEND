import { appDB } from '../../../domain/repositories/index.js'
export const initializeRoles = async () => {
  try {
    const count = await appDB.Users.Role.estimatedDocumentCount()

    if (count > 0) return

    await Promise.all([
      new appDB.Users.Role({ name: 'user' }).save(),
      new appDB.Users.Role({ name: 'moderator' }).save(),
      new appDB.Users.Role({ name: 'admin' }).save()
    ])
  } catch (e) {
    console.error(e)
  }
}
