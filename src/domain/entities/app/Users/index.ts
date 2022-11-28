import { CreateEntity, IComment, IRole, IUser } from '../../types.js'
import { Comment } from './Comment.js'
import { Role } from './Role.js'
import { User } from './User.js'

export const Users = {
  Comment,
  Role,
  User
}
export interface IUsers {
  Comment: CreateEntity<IComment>
  Role: CreateEntity<IRole>
  User: CreateEntity<IUser>
}
