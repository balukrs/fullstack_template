import { prisma } from '../../../lib/prisma'
import type { Request, Response, NextFunction } from 'express'
import type { MeResponse, ListTaskRequest } from '@template/shared'
import { CustomError } from '../../../utils/error'

import { createTask, updateTask, listTask, removeTask } from './services'

export const getUser = async (req: Request, res: Response<MeResponse>, next: NextFunction) => {
  try {
    const details = req?.tokenDetails

    if (details?.id) {
      const user = await prisma.user.findUnique({ where: { id: details?.id } })

      if (user) {
        return res.status(200).json({
          message: 'User Details',
          data: { email: user.email, id: details.id },
          success: true,
        })
      }
    }
    throw new CustomError('Not Authorized', 401)
  } catch (error) {
    next(error)
  }
}

export const postTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const reqBody = req.body

    const task = await createTask(reqBody)

    if (task) {
      return res.status(201).json({ message: 'Task created', success: true })
    } else throw new CustomError('Failed to create', 404)
  } catch (error) {
    next(error)
  }
}

export const putTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const reqBody = req.body

    const task = await updateTask(reqBody)

    if (task) {
      return res.status(201).json({ message: 'Task updated', success: true })
    } else throw new CustomError('Failed to update', 404)
  } catch (error) {
    next(error)
  }
}

export const getTask = async (
  req: Request<object, object, object, ListTaskRequest>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const page = req.query.page
    const limit = req.query.limit
    const userId = req.query.userId

    const data = await listTask({ page, limit, userId })

    if (data) {
      return res.status(200).json({ message: 'Task Fetched', success: true, data })
    } else throw new CustomError('Failed to list', 404)
  } catch (error) {
    next(error)
  }
}

export const deleteTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const reqBody = req.body

    const task = await removeTask(reqBody)

    if (task) {
      return res.status(200).json({ message: 'Task removed', success: true })
    } else throw new CustomError('Failed to delete', 404)
  } catch (error) {
    next(error)
  }
}
