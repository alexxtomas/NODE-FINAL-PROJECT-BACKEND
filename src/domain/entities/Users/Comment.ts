import { Model, Mongoose, Types } from 'mongoose'

interface IComment {
  username: Types.ObjectId
  comment: string
  date: string
}

export default (db: Mongoose): Model<IComment> => {
  const commentSchema = new db.Schema<IComment>({
    username: { ref: 'User', type: db.Schema.Types.ObjectId, required: true },
    comment: { type: String, required: true },
    date: { type: String, required: true }
  })

  return db.model<IComment>('Comment', commentSchema)
}
