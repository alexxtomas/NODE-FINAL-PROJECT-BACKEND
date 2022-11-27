import { appDB } from '../../../../domain/repositories/index.js'

export const initializeLaptops = async () => {
  try {
    const count = await appDB.PCs.Laptop.estimatedDocumentCount()

    if (count > 0) return

    const laptopCategory = await appDB.Categories.findOne({ name: 'laptop' })

    await Promise.all([
      new appDB.PCs.Laptop({
        name: 'Acer Nitro 5 AN515-58-7365 Intel Core i7-12700H/16GB/512GB SSD/RTX 3050Ti/15.6',
        category: laptopCategory?._id,
        color: 'black',
        commentaries: [],
        createdAt: Date.now(),
        displayResoultion: '1080',
        displaySize: '15.6',
        displayRefreshRate: '144hz',
        graphicCard: 'RTC 3050Ti',
        image:
          'https://res.cloudinary.com/dv3z6ozcj/image/upload/v1669547388/NODE-FINAL-PROJECT/Laptops/1355-acer-nitro-5-an515-58-7365-intel-core-i7-12700h-16gb-512gb-ssd-rtx-3050ti-156_epyofh.png',
        likes: 0,
        links: [
          'https://www.pccomponentes.com/acer-nitro-5-an515-58-7365-intel-core-i7-12700h-16gb-512gb-ssd-rtx-3050ti-156'
        ],
        normalPrice: '1299€',
        processor: 'Intel Core i7 12700H',
        ram: '16GB',
        weight: '2.6kg',
        storage: '1TB SSD'
      }).save()
    ])
  } catch (e) {
    console.error(e)
  }
}
