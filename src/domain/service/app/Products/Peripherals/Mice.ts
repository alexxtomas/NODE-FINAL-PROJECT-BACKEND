import { Request, Response } from 'express'
import { Server } from '../../../../../shared/server/indext.js'
import { Products } from '../../../../orm/app/index.js'

const getAll = async (req: Request, res: Response) => {
  try {
    const mice = await Products.Peripherals.getAll('mouse')
    Server.Response(res, {
      error: false,
      data: mice,
      code: mice.length > 0 ? Server.Status.OK : Server.Status.NO_CONTENT
    })
  } catch (e) {
    throw new Error('Cannot service all users')
  }
}

export default { getAll }
