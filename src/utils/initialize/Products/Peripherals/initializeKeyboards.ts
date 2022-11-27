import { appDB } from '../../../../domain/repositories/index.js'

export const initializeKeyboard = async () => {
  try {
    const count = await appDB.Peripherals.Keyboard.estimatedDocumentCount()

    if (count > 0) return

    const keyboardCategory = await appDB.Categories.findOne({
      name: 'keyboard'
    })

    await Promise.all([
      new appDB.Peripherals.Keyboard({
        name: 'HyperX Alloy Origins Core PBT Gaming RGB Switch Red Linear',
        category: keyboardCategory?._id,
        color: 'Black',
        commentaries: [],
        createdAt: Date.now(),
        image:
          'https://res.cloudinary.com/dv3z6ozcj/image/upload/v1669544272/NODE-FINAL-PROJECT/Keyboards/1620-hyperx-alloy-origins-core-pbt-teclado-mecanico-gaming-rgb-switch-red-linear_lhom6a.png',
        layout: 'Spanish',
        likes: 0,
        links: [
          'https://www.pccomponentes.com/hyperx-alloy-origins-core-pbt-teclado-mecanico-gaming-rgb-switch-red-linear'
        ],
        normalPrice: '120€',
        rgb: true,
        size: 'tkl',
        switches: 'red',
        wireless: false
      }).save(),
      new appDB.Peripherals.Keyboard({
        name: 'Energy Sistem Gaming Keyboard ESG K6 Mechanik',
        category: keyboardCategory?._id,
        color: 'Black',
        commentaries: [],
        createdAt: Date.now(),
        image:
          'https://res.cloudinary.com/dv3z6ozcj/image/upload/v1669544647/NODE-FINAL-PROJECT/Keyboards/1948-energy-sistem-gaming-keyboard-esg-k6-mechanik-teclado-gaming-mecanico-blue_zwn2cs.jpg',
        layout: 'Spanish',
        likes: 0,
        links: [
          'https://www.pccomponentes.com/energy-sistem-gaming-keyboard-esg-k6-mechanik-teclado-gaming-mecanico-blue?gclid=Cj0KCQiAsoycBhC6ARIsAPPbeLsUCBziCp7oDXmzEvc7eCcx8QJbsZNj8ltBvXn5cZFpFFa6OLrBwucaAhk0EALw_wcB'
        ],
        normalPrice: '49,99€',
        rgb: true,
        size: 'tkl',
        switches: 'blue',
        wireless: false
      }).save(),
      new appDB.Peripherals.Keyboard({
        name: 'Corsair K100 AIR ',
        category: keyboardCategory?._id,
        color: 'Black',
        commentaries: [],
        createdAt: Date.now(),
        image:
          'https://res.cloudinary.com/dv3z6ozcj/image/upload/v1669545032/NODE-FINAL-PROJECT/Keyboards/1774-corsair-k100-air-teclado-mecanico-inalambrico-gaming-cherry-mx-ultra-low-rgb_qbbra1.png',
        layout: 'Spanish',
        likes: 0,
        links: [
          'https://www.pccomponentes.com/corsair-k100-air-teclado-mecanico-inalambrico-gaming-cherry-mx-ultra-low-rgb'
        ],
        normalPrice: '300€',
        rgb: true,
        size: 'Full',
        switches: 'Cherry MX Ultra Low',
        wireless: true
      }).save()
    ])
  } catch (e) {
    console.error(e)
  }
}
