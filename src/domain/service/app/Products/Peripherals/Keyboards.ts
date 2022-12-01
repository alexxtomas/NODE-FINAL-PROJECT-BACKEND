import { Request, Response } from 'express'
import { Server } from '../../../../../shared/server/indext.js'
import { Products } from '../../../../orm/app/index.js'

const getAll = async (req: Request, res: Response) => {
  try {
    const keyboards = await Products.Peripherals.getAll('keyboard')
    Server.Response(res, {
      error: false,
      data: keyboards,
      code: keyboards.length > 0 ? Server.Status.OK : Server.Status.NO_CONTENT
    })
  } catch (e) {
    throw new Error('Cannot service all users')
  }
}

// const createOne = async (req: Request, res: Response) => {
//   try {
//     // Create ORM
//   } catch (e) {
//     console.error(e)
//   }
// }

export default { getAll }
