import { Model, Mongoose, Types } from 'mongoose'

interface IUser {
  username: String
  email: String
  role: String
  isActivate: Boolean
  comments: Types.ObjectId[]
}

module.exports = (db: Mongoose): Model<IUser> => {
  const userSchema = new db.Schema<IUser>(
    {
      username: { type: String, required: true, unique: true },
      email: { type: String, required: true, unique: true },
      role: { type: String, required: true },
      isActivate: { type: String, required: true, default: false },
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

  return db.model<IUser>('User', userSchema)
}
