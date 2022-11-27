import { Request, Response } from 'express'
import { ApiInfo } from '../orm/index.js'

export const getApiInfo = async (req: Request, res: Response) => {
  const info = ApiInfo.get()
  const { name, author, version, description } = info
  res.json({
    name,
    author,
    version,
    description
  })
}
