import { prisma } from '../../../lib/prisma'
import type { Response } from 'express'
import bcrypt from 'bcrypt'
import Jwt from 'jsonwebtoken'
import { CustomError } from '../../../utils/error'

const checkUserExist = async (email: string) => {
  const user = await prisma.user.findUnique({ where: { email } })
  return user
}

export const createUser = async (email: string, password: string) => {
  const isUser = await checkUserExist(email)

  if (isUser) throw new CustomError('User Already Available', 400)

  const hashed = await bcrypt.hash(password, 10)

  await prisma.user.create({ data: { email, password: hashed } })
}

export const loginUser = async (email: string, password: string, res: Response) => {
  const isUser = await checkUserExist(email)

  if (!isUser) throw new CustomError('User not found', 400)

  const compare = await bcrypt.compare(password, isUser.password)

  if (!compare) {
    throw new CustomError('Invalid Password', 400)
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

    return { email: isUser.email, id: isUser.id }
  }
  throw new CustomError('Internal Server Error', 500)
}
