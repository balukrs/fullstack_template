import type { Request, Response, NextFunction } from 'express'
import { createUser, loginUser } from './service'
import type { SignUpResponse, LoginResponse } from '@template/shared'

export const signUp = async (req: Request, res: Response<SignUpResponse>, next: NextFunction) => {
  try {
    const { email, password } = req.body
    await createUser(email, password)
    return res.status(201).json({ message: 'User Created', success: true })
  } catch (error) {
    next(error)
  }
}

export const login = async (req: Request, res: Response<LoginResponse>, next: NextFunction) => {
  try {
    const { email, password } = req.body
    const user = await loginUser(email, password, res)

    if (user?.email) {
      return res
        .status(200)
        .json({ message: 'Logged In', success: true, data: { email: user.email, id: user.id } })
    }
  } catch (error) {
    next(error)
  }
}
