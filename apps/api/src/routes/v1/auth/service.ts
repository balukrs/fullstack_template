import { prisma } from '../../../lib/prisma'
import type { Response } from 'express'
import bcrypt from 'bcrypt'
import Jwt from 'jsonwebtoken'

const checkUserExist = async (email: string) => {
  const user = await prisma.user.findUnique({ where: { email } })
  return user
}

export const createUser = async (email: string, password: string, res: Response) => {
  const isUser = await checkUserExist(email)

  if (isUser) return res.status(400).json({ message: 'User Already Available', success: false })

  const hashed = await bcrypt.hash(password, 10)

  await prisma.user.create({ data: { email, password: hashed } })
}

export const loginUser = async (email: string, password: string, res: Response) => {
  const isUser = await checkUserExist(email)

  if (!isUser) return res.status(404).json({ message: 'User not found', success: false })

  const compare = await bcrypt.compare(isUser.password, password)

  if (!compare) {
    return res.status(400).json({ message: 'Invalid Password', success: false })
  }

  if (process.env.JWT_SECRET) {
    const accessToken = Jwt.sign({ email, id: isUser.id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    })

    await prisma.user.update({
      where: { id: isUser.id },
      data: { token: accessToken },
    })

    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      sameSite: true,
      maxAge: 60 * 60 * 1000,
      secure: process.env.NODE_ENV === 'production',
    })
    return res.status(200).json({ message: 'Logged In', success: true })
  }
  return res.status(500).json({ message: 'Secret not available', success: false })
}
