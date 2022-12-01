import { Request, Response } from 'express'
import { Server } from '../../../../../shared/server/indext.js'
import { Products } from '../../../../orm/app/index.js'

const getAll = async (req: Request, res: Response) => {
  try {
    const pcs = await Products.PCs.getAll('desktop')
    Server.Response(res, {
      error: false,
      data: pcs,
      code: pcs.length > 0 ? Server.Status.OK : Server.Status.NO_CONTENT
    })
  } catch (e) {
    throw new Error('Cannot service all users')
  }
}

export default { getAll }
