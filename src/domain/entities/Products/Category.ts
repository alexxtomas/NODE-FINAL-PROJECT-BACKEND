import { Model, Mongoose } from 'mongoose'
import { CreateEntity, ICategory } from '../types.js'

export const Cateogry: CreateEntity<ICategory> = (
  db: Mongoose
): Model<ICategory> => {
  const categoryShema = new db.Schema<ICategory>(
    {
      name: { type: String, required: true },
      products: [
        {
          ref: 'Keyboard' || 'Mouse',
          required: true,
          type: db.Schema.Types.ObjectId
        }
      ]
    },
    {
      timestamps: true,
      versionKey: false
    }
  )

  return db.model<ICategory>('Category', categoryShema)
}
