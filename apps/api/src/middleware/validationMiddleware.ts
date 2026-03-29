import type { Request, Response, NextFunction } from 'express'
import * as z from 'zod'
import type { ZodType } from 'zod'

export const validationMiddleware =
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

export const validationQueryMiddleware =
  (schema: ZodType) => (req: Request, res: Response, next: NextFunction) => {
    const queries = req.query

    const result = schema.safeParse(queries)

    if (result.error?.issues) {
      return res.status(400).json({
        message: z.prettifyError(result.error),
        success: false,
      })
    }
    next()
  }

export const validationParamsMiddleware =
  (schema: ZodType) => (req: Request, res: Response, next: NextFunction) => {
    const queries = req.params

    const result = schema.safeParse(queries)

    if (result.error?.issues) {
      return res.status(400).json({
        message: z.prettifyError(result.error),
        success: false,
      })
    }
    next()
  }
