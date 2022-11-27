import { Model, Mongoose } from 'mongoose'
import { CreateEntity, IComment } from '../types.js'

export const Comment: CreateEntity<IComment> = (
  db: Mongoose
): Model<IComment> => {
  const commentSchema = new db.Schema<IComment>({
    username: { ref: 'User', type: db.Schema.Types.ObjectId, required: true },
    comment: { type: String, required: true },
    date: { type: String, required: true }
  })

  return db.model<IComment>('Comment', commentSchema)
}
