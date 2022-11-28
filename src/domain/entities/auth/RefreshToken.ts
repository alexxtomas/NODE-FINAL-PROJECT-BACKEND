import { Model, Mongoose } from 'mongoose'
import mongooseUniqueValidator from 'mongoose-unique-validator'
import { CreateEntity, IRefreshToken } from '../types.js'

export const RefreshToken: CreateEntity<IRefreshToken> = (
  db: Mongoose
): Model<IRefreshToken> => {
  const refreshTokenSchema = new db.Schema<IRefreshToken>(
    {
      refreshToken: { type: String, required: true, unique: true }
    },
    {
      timestamps: true,
      versionKey: false
    }
  )

  refreshTokenSchema.plugin(mongooseUniqueValidator, {
    type: 'mongoose-unique-validator'
  })

  return db.model<IRefreshToken>('RefreshToken', refreshTokenSchema)
}
