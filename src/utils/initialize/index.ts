import { initializeCategories } from './Products/initializeCategories.js'
import { initializeDesktopPCs } from './Products/PCs/initializeDesktop.js'
import { initializeLaptops } from './Products/PCs/initializeLaptops.js'
import { initializeKeyboard } from './Products/Peripherals/initializeKeyboards.js'
import { initializeMice } from './Products/Peripherals/initializeMice.js'
import { initializeRoles } from './Users/initializeRoles.js'
import { initializeUsers } from './Users/initializeUsers.js'

export const initialize = async () => {
  await Promise.all([
    initializeDesktopPCs(),
    initializeKeyboard(),
    initializeLaptops(),
    initializeMice(),
    initializeRoles(),
    initializeUsers(),
    initializeCategories()
  ])
}
