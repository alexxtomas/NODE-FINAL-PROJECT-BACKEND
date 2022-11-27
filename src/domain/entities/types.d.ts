import { Model, Mongoose, Types } from 'mongoose'

export type CreateEntity<Type> = (db: Mongoose) => Model<Type>

export interface IProduct {
  name: String
  image: String
  color: String
  normalPrice: String
  category: Types.ObjectId
  links: String[]
  likes: Number
  createdAt: Number
  commentaries: [Types.ObjectId]
}

// PCs
export interface IDesktop extends IProduct {
  powerSupply: String
  motherboard?: String
  graphicCard: String
  processor: String
  ram: String
  storage: String
}

export interface ILaptop extends IProduct {
  weight: String
  displaySize: String
  displayResoultion: String
  displayRefreshRate: String
  graphicCard: String
  processor: String
  ram: String
  storage: String
}

// Peripherals
export interface IKeyboard extends IProduct {
  layout: String
  rgb: Boolean
  switches: String
  wireless: Boolean
  size: String
}

export interface IMouse extends IProduct {
  rgb: Boolean
  weight: String
  wireless: Boolean
  sensor: String
}

// USERS
export interface IComment {
  username: Types.ObjectId
  content: string
  date: string
  product: Types.ObjectId
}

export interface IRole {
  name: String
  users: Types.ObjectId
}

export interface IUser {
  username: String
  email: String
  role: String
  isActivate: Boolean
  comments: Types.ObjectId[]
  password: String
}

export interface ICategory {
  name: String
  products: Types.ObjectId[]
}
