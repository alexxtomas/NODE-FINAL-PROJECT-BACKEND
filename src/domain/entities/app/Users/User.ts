import bcrypt from 'bcrypt'
import { Model, Mongoose } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'
import { CreateEntity, IUser } from '../../types.js'

export const User: CreateEntity<IUser> = (db: Mongoose): Model<IUser> => {
  const userSchema = new db.Schema<IUser>(
    {
      username: { type: String, required: true, unique: true },
      email: { type: String, required: true, unique: true },
      role: { type: String, required: true, default: 'user' },
      isActivate: { type: Boolean, required: true, default: false },
      password: { type: String, required: true },
      comments: [
        {
          ref: 'Comment',
          type: db.Schema.Types.ObjectId
        }
      ]
    },
    {
      timestamps: true,
      versionKey: false
    }
  )

  userSchema.statics.encryptPassword = async (password) => {
    const salt = 10
    return await bcrypt.hash(password, salt)
  }

  userSchema.plugin(uniqueValidator, {
    type: 'mongoose-unique-validator'
  })

  return db.model<IUser>('User', userSchema)
}
