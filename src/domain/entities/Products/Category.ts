import { Model, Mongoose, Types } from 'mongoose'
import { CreateEntity, ICategory } from '../types.js'

export const Cateogry: CreateEntity<ICategory> = (
  db: Mongoose
): Model<ICategory> => {
  const categoryShema = new db.Schema<ICategory>(
    {
      name: { type: String, required: true },
      products: [{ ref: 'Usere', type: Types.ObjectId }]
    },
    {
      timestamps: true,
      versionKey: false
    }
  )

  return db.model<ICategory>('Category', categoryShema)
}
