import { Products } from './app/Products/index.js'
import { Users } from './app/Users/index.js'
import { RefreshToken } from './auth/RefreshToken.js'

export const Entities = {
  App: {
    PCs: Products.PCs,
    Peripherals: Products.Peripherals,
    Categories: Products.Cateogry,
    Users
  },
  Auth: {
    RefreshToken
  }
}
