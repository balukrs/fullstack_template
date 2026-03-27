import type { Response, Request, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

const authMiddleWare = (req: Request, res: Response, next: NextFunction) => {
  const accessToken = req.cookies.accessToken

  if (!accessToken || !process.env.JWT_SECRET) {
    return res.status(401).json({ message: 'Unauthorized', success: false })
  }

  try {
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET) as tokenType
    req.tokenDetails = decoded
    next()
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({ message: error.message, success: false })
    }
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ message: error.message, success: false })
    }
    next(error)
  }
}

export default authMiddleWare
