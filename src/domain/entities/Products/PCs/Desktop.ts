import { Model, Mongoose } from 'mongoose'
import mongooseUniqueValidator from 'mongoose-unique-validator'
import { CreateEntity, IDesktop } from '../../types.js'

export const Desktop: CreateEntity<IDesktop> = (
  db: Mongoose
): Model<IDesktop> => {
  const desktopSchema = new db.Schema<IDesktop>(
    {
      name: { type: String, required: true, unique: true },
      image: { type: String, required: true, unique: true },
      color: { type: String, required: true },
      normalPrice: { type: String, required: true },
      category: { ref: 'Category', type: db.Schema.Types.ObjectId },
      links: [{ type: String, required: true, unique: true }],
      likes: { type: Number, required: true },
      createdAt: { type: Number, required: true },
      powerSupply: { type: String, required: true },
      motherboard: { type: String, required: true },
      graphicCard: { type: String, required: true },
      processor: { type: String, required: true },
      ram: { type: String, required: true }
    },

    {
      timestamps: true,
      versionKey: false
    }
  )

  desktopSchema.plugin(mongooseUniqueValidator, {
    type: 'mongoose-unique-validator'
  })

  return db.model<IDesktop>('Desktop', desktopSchema)
}
