import { Model, Mongoose } from 'mongoose'
import mongooseUniqueValidator from 'mongoose-unique-validator'
import { CreateEntity, IKeyboard } from '../../types.js'

export const Keyboard: CreateEntity<IKeyboard> = (
  db: Mongoose
): Model<IKeyboard> => {
  const keyboardSchema = new db.Schema<IKeyboard>(
    {
      name: { type: String, required: true, unique: true },
      image: { type: String, required: true, unique: true },
      color: { type: String, required: true },
      normalPrice: { type: String, required: true },
      category: { ref: 'Category', type: db.Schema.Types.ObjectId },
      links: [{ type: String, required: true, unique: true }],
      likes: { type: Number, required: true },
      createdAt: { type: Number, required: true },
      layout: { type: String, required: true },
      rgb: { type: String, required: true },
      switches: { type: String, required: true },
      wireless: { type: String, required: true },
      size: { type: String, required: true },
      commentaries: [{ ref: 'Comment', type: db.Schema.Types.ObjectId }]
    },
    {
      timestamps: true,
      versionKey: false
    }
  )

  keyboardSchema.plugin(mongooseUniqueValidator, {
    type: 'mongoose-unique-validator'
  })

  return db.model<IKeyboard>('Keyboard', keyboardSchema)
}
