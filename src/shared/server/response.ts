import { Response as ExpressResponse } from 'express'

export const Response = (
  res: ExpressResponse,
  { code = 200, message = '', data = '', error = false }
) => {
  return res.status(code).json({ code, data, message, error })
}
