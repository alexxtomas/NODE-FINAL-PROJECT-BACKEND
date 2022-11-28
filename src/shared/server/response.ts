import { Response as ExpressResponse } from 'express'

export type TResponse = (
  res: ExpressResponse,
  {
    code,
    message,
    data,
    error
  }: { code: number; message?: string; data?: any; error?: boolean }
) => ExpressResponse

export const Response: TResponse = (
  res,
  { code = 200, message = '', data = '', error = false }
) => {
  if (!data) data = ''
  return res.status(code).json({ code, data, message, error })
}
