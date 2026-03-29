import * as z from 'zod'

export const createSchema = z.strictObject({
  title: z.string(),
  description: z.string(),
  status: z.string(),
  userId: z.string(),
})

export const updateSchema = z.strictObject({
  title: z.string().nullable(),
  description: z.string().nullable(),
  status: z.string().nullable(),
  userId: z.string().nullable(),
  id: z.number(),
})

export const getTasksSchema = z.strictObject({
  limit: z.coerce.number(),
  page: z.coerce.number(),
  userId: z.string(),
})

export const deleteSchema = z.strictObject({
  id: z.string(),
  userId: z.string(),
})
