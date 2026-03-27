import { prisma } from '../../../lib/prisma'
import type { Request, Response } from 'express'
import { extractErrorMessage } from '../../../utils/error'
import type { MeResponse } from '@template/shared'

export const getUser = async (req: Request, res: Response<MeResponse>) => {
  try {
    const details = req?.tokenDetails

    if (details?.id) {
      const user = await prisma.user.findUnique({ where: { id: details?.id } })

      if (user) {
        return res
          .status(200)
          .json({ message: 'User Details', data: { email: user.email }, success: true })
      }
    }
    return res.status(401).json({ message: 'Not Authorized', success: false })
  } catch (error) {
    return res.status(401).json({ message: extractErrorMessage(error), success: false })
  }
}
