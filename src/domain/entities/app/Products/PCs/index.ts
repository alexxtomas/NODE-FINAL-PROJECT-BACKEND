import { CreateEntity, IDesktop, ILaptop } from '../../../types'
import { Desktop } from './Desktop.js'
import { Laptop } from './Laptop.js'

export const PCs = {
  Desktop,
  Laptop
}

export interface IPCs {
  Desktop: CreateEntity<IDesktop>
  Laptop: CreateEntity<ILaptop>
}

export { Desktop, Laptop }
