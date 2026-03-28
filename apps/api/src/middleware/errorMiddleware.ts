import type { Request, Response, NextFunction } from 'express'
import { CustomError } from '../utils/error'

const errorMiddleWare = (error: unknown, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(error)
  }

  if (error instanceof CustomError) {
    return res.status(error.status).json({ message: error.message, success: false })
  }

  return res.status(500).json({ message: 'Internal Server Error', success: false })
}

export default errorMiddleWare
