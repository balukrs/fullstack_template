import type { Request, Response } from 'express'
import { createUser } from './service'
import { extractErrorMessage } from '../../../utils/error'

export const signUp = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body
    await createUser(email, password, res)
    return res.status(201).json({ message: 'User Created', success: true })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: extractErrorMessage(error), success: false })
  }
}
