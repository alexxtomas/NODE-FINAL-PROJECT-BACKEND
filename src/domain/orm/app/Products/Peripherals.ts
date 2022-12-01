import { appDB } from '../../../repositories/index.js'

type TPeripherals = 'keyboard' | 'mouse'
const getAll = async (peripheralsType: TPeripherals) => {
  try {
    if (peripheralsType === 'keyboard')
      return await appDB.Peripherals.Keyboard.find()

    return await appDB.Peripherals.Mouse.find()
  } catch (e) {
    throw new Error('Cannot get all users')
  }
}

export const Peripherals = {
  getAll
}
