import type { Request, Response, NextFunction } from 'express'
import * as z from 'zod'
import type { ZodType } from 'zod'

const validationMiddleware =
  (schema: ZodType) => (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body)

    if (result.error?.issues) {
      return res.status(400).json({
        message: z.prettifyError(result.error),
        success: false,
      })
    }
    next()
  }

export default validationMiddleware
