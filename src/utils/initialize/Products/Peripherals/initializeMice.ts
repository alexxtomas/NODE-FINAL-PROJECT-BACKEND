import { appDB } from '../../../../domain/repositories/index.js'

export const initializeMice = async () => {
  try {
    const count = await appDB.Peripherals.Mouse.estimatedDocumentCount()
    if (count > 0) return

    const mouseCategory = await appDB.Categories.findOne({ name: 'mouse' })

    await Promise.all([
      new appDB.Peripherals.Mouse({
        name: 'Forgeon Darrowspike ',
        color: 'black',
        image:
          'https://res.cloudinary.com/dv3z6ozcj/image/upload/v1669546883/NODE-FINAL-PROJECT/Mice/1152-forgeon-darrowspike-raton-gaming-rgb-wireless-19000dpi-negro-comprar_pcy6od.png',
        likes: 0,
        links: [
          'https://www.pccomponentes.com/forgeon-darrowspike-rgb-raton-gaming-inalambrico-19000-dpi-negro'
        ],
        wireless: true,
        normalPrice: '100€',
        rgb: true,
        sensor: 'Pixart PMW3370',
        weight: '95g',
        commentaries: [],

        createdAt: Date.now(),
        category: mouseCategory?._id
      }).save()
    ])
  } catch (e) {
    console.error(e)
  }
}
