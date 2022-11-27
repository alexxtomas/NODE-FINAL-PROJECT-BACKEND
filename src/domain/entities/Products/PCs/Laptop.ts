import { Model, Mongoose } from 'mongoose'
import mongooseUniqueValidator from 'mongoose-unique-validator'
import { CreateEntity, ILaptop } from '../../types.js'

export const Laptop: CreateEntity<ILaptop> = (db: Mongoose): Model<ILaptop> => {
  const laptopSchema = new db.Schema<ILaptop>(
    {
      name: { type: String, required: true, unique: true },
      image: { type: String, required: true, unique: true },
      color: { type: String, required: true },
      normalPrice: { type: String, required: true },
      category: { ref: 'Category', type: db.Schema.Types.ObjectId },
      links: [{ type: String, required: true, unique: true }],
      likes: { type: Number, required: true },
      createdAt: { type: Number, required: true },
      weight: { type: String, required: true },
      displaySize: { type: String, required: true },
      displayResoultion: { type: String, required: true },
      displayRefreshRate: { type: String, required: true },
      graphicCard: { type: String, required: true },
      processor: { type: String, required: true },
      ram: { type: String, required: true },
      commentaries: [{ ref: 'Comment', type: db.Schema.Types.ObjectId }],
      storage: { type: String, required: true }
    },

    {
      timestamps: true,
      versionKey: false
    }
  )

  laptopSchema.plugin(mongooseUniqueValidator, {
    type: 'mongoose-unique-validator'
  })

  return db.model<ILaptop>('Laptop', laptopSchema)
}
