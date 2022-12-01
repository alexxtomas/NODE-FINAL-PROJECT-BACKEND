import { appDB } from '../../../repositories/index.js'

type TPCs = 'laptop' | 'desktop'
const getAll = async (pcType: TPCs) => {
  try {
    if (pcType === 'desktop') return await appDB.PCs.Desktop.find()
    return await appDB.PCs.Laptop.find()
  } catch (e) {
    throw new Error('Cannot get all users')
  }
}

export const PCs = {
  getAll
}
