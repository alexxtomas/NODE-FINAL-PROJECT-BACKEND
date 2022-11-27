import { CreateEntity, IKeyboard, IMouse } from '../../types'
import { Keyboard } from './Keyboard.js'
import { Mouse } from './Mouse.js'

export const Peripherals = {
  Keyboard,
  Mouse
}
export interface IPeripherals {
  Keyboard: CreateEntity<IKeyboard>
  Mouse: CreateEntity<IMouse>
}
