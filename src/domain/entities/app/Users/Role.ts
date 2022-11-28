import { model, Model, Mongoose } from 'mongoose'
import { CreateEntity, IRole } from '../../types.js'
export const Role: CreateEntity<IRole> = (db: Mongoose): Model<IRole> => {
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
