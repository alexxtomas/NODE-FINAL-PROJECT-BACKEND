import { Model } from 'mongoose'
import {
  ICategory,
  IComment,
  IDesktop,
  IKeyboard,
  ILaptop,
  IMouse,
  IRole,
  IUser
} from '../../../entities/types'
export interface IDB {
  PCs: {
    Desktop: Model<IDesktop>
    Laptop: Model<ILaptop>
  }
  Peripherals: {
    Keyboard: Model<IKeyboard>
    Mouse: Model<IMouse>
  }
  Users: {
    Comment: Model<IComment>
    Role: Model<IRole>
    User: Model<IUser>
  }
  Categories: Model<ICategory>
}
