import { Model, Mongoose, Types } from 'mongoose'

export type CreateEntity<Type> = (db: Mongoose) => Model<Type>

export interface IProduct {
  name: string
  image: string
  color: string
  normalPrice: string
  category: Types.ObjectId
  links: string[]
  likes: number
  createdAt: number
  commentaries: [Types.ObjectId]
}

// PCs
export interface IDesktop extends IProduct {
  powerSupply: string
  motherboard?: string
  graphicCard: string
  processor: string
  ram: string
  storage: string
}

export interface ILaptop extends IProduct {
  weight: string
  displaySize: string
  displayResoultion: string
  displayRefreshRate: string
  graphicCard: string
  processor: string
  ram: string
  storage: string
}

// Peripherals
export interface IKeyboard extends IProduct {
  layout: string
  rgb: boolean
  switches: string
  wireless: boolean
  size: string
}

export interface IMouse extends IProduct {
  rgb: boolean
  weight: string
  wireless: boolean
  sensor: string
}

// USERS
export interface IComment {
  username: Types.ObjectId
  content: string
  date: string
  product: Types.ObjectId
}

export interface IRole {
  name: string
  users: Types.ObjectId
}

export interface IUser {
  username: string
  email: string
  role: string
  isActivate: boolean
  comments: Types.ObjectId[]
  password: string
}

export interface ICategory {
  name: string
  products: Types.ObjectId[]
}

export interface IRefreshToken {
  refreshToken: string
}
