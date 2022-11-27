import { Model, Mongoose } from 'mongoose'
import mongooseUniqueValidator from 'mongoose-unique-validator'
import { CreateEntity, IMouse } from '../../types.js'

export const Mouse: CreateEntity<IMouse> = (db: Mongoose): Model<IMouse> => {
  const mouseSchema = new db.Schema<IMouse>(
    {
      name: { type: String, required: true, unique: true },
      image: { type: String, required: true, unique: true },
      color: { type: String, required: true },
      normalPrice: { type: String, required: true },
      category: { ref: 'Category', type: db.Schema.Types.ObjectId },
      links: [{ type: String, required: true, unique: true }],
      likes: { type: Number, required: true },
      createdAt: { type: Number, required: true },
      rgb: { type: Boolean, required: true },
      weight: { type: String, required: true },
      wireless: { type: Boolean, required: true },
      sensor: { type: String, required: true }
    },

    {
      timestamps: true,
      versionKey: false
    }
  )

  mouseSchema.plugin(mongooseUniqueValidator, {
    type: 'mongoose-unique-validator'
  })

  return db.model<IMouse>('Mouse', mouseSchema)
}
