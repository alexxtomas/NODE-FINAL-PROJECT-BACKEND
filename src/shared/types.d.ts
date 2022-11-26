import { Types } from 'mongoose'

export interface IProduct {
  name: String
  image: String
  color: String
  normalPrice: String
  category: Types.ObjectId
  links: String[]
  likes: Number
  createdAt: Number
}
