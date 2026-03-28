import { prisma } from '../../../lib/prisma'
import type {
  TaskCreateRequest,
  TaskUpdateRequest,
  ListTaskRequest,
  TaskDeleteRequest,
} from '@template/shared'

export const createTask = async (task: TaskCreateRequest) => {
  const data = await prisma.task.create({
    data: {
      title: task.title,
      description: task.description,
      status: task.status,
      userId: task.userId,
    },
  })
  return data
}

export const updateTask = async (task: TaskUpdateRequest) => {
  const data = await prisma.task.update({
    where: { userId: task.userId, id: task.id },
    data: {
      ...(task?.title ? { title: task.title } : {}),
      ...(task?.description ? { description: task.description } : {}),
      ...(task?.status ? { status: task.status } : {}),
    },
  })

  return data
}

export const listTask = async (param: ListTaskRequest) => {
  const [data, count] = await prisma.$transaction([
    prisma.task.findMany({
      take: param.limit,
      skip: (param.page - 1) * param.limit,
      orderBy: {
        createdAt: 'asc',
      },
      where: {
        userId: param.userId,
      },
    }),
    prisma.task.count({ where: { userId: param.userId } }),
  ])

  return {
    data,
    meta: {
      total: count,
      total_pages: Math.ceil(count / param.limit),
      current_page: param.page,
      current_limit: param.limit,
    },
  }
}

export const removeTask = async (param: TaskDeleteRequest) => {
  const data = await prisma.task.delete({ where: { id: param.id, userId: param.userId } })
  return data
}
