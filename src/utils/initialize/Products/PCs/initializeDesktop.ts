import { appDB } from '../../../../domain/repositories/index.js'

export const initializeDesktopPCs = async () => {
  try {
    const count = await appDB.PCs.Desktop.estimatedDocumentCount()
    if (count > 0) return

    const desktopCategory = await appDB.Categories.findOne({ name: 'desktop' })

    await Promise.all([
      new appDB.PCs.Desktop({
        name: 'HP OMEN 40L Desktop GT21-0077ns Intel Core i7-12700K/16GB/1TB SSD/RTX 3060 Ti',
        category: desktopCategory?._id,
        color: 'black',
        commentaries: [],
        createdAt: Date.now(),
        graphicCard: 'RTX 3060 TI',
        image:
          'https://res.cloudinary.com/dv3z6ozcj/image/upload/v1669547958/NODE-FINAL-PROJECT/Desktop%20PCs/1120-hp-omen-40l-desktop-gt21-0077ns-intel-core-i7-12700k-16gb-1tb-ssd-rtx-3060-ti_mfsvbs.jpg',
        likes: 0,
        links: [
          'https://www.pccomponentes.com/hp-omen-40l-desktop-gt21-0077ns-intel-core-i7-12700k-16gb-1tb-ssd-rtx-3060-ti'
        ],
        motherboard: '',
        normalPrice: '2000€',
        powerSupply: '600W 80 PLUS Gold',
        storage: '1TB SSD',
        processor: 'Intel Core i7-12700K',
        ram: '16GB'
      }).save()
    ])
  } catch (e) {
    console.error(e)
  }
}
