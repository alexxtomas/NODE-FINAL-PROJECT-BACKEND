import { model, Model, Mongoose, Types } from 'mongoose'

interface IRole {
  name: String
  users: Types.ObjectId
}

module.exports = (db: Mongoose): Model<IRole> => {
  const roleSchema = new db.Schema<IRole>(
    {
      name: { type: String, required: true }
    },
    {
      timestamps: true,
      versionKey: false
    }
  )

  return model<IRole>('Role', roleSchema)
}
