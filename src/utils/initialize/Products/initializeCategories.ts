import { appDB } from '../../../domain/repositories/index.js'

export const initializeCategories = async () => {
  const counter = await appDB.Categories.estimatedDocumentCount()

  if (counter > 0) return

  const keyboards = await appDB.Peripherals.Keyboard.find()
  const mice = await appDB.Peripherals.Mouse.find()
  const desktopPCs = await appDB.PCs.Desktop.find()
  const laptops = await appDB.PCs.Laptop.find()

  const _ids = {
    keyboards: keyboards.map(({ _id }) => _id),
    mice: mice.map(({ _id }) => _id),
    desktopPCs: desktopPCs.map(({ _id }) => _id),
    laptops: laptops.map(({ _id }) => _id)
  }
  await Promise.all([
    new appDB.Categories({
      name: 'keyboard',
      products: [..._ids.keyboards]
    }).save(),
    new appDB.Categories({
      name: 'mice',
      products: [..._ids.mice]
    }).save(),
    new appDB.Categories({
      name: 'desktop PCs',
      products: [..._ids.desktopPCs]
    }).save(),
    new appDB.Categories({
      name: 'laptops',
      products: [..._ids.laptops]
    }).save()
  ])
}
