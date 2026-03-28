export type TaskCreateRequest = {
  title: string
  status: string
  description: string
  userId: string
}
export type TaskUpdateRequest = {
  title?: string
  status?: string
  description?: string
  userId: string
  id: string
}

export type ListTaskRequest = {
  limit: number
  page: number
  userId: string
}

export type TaskDeleteRequest = {
  id: string
  userId: string
}
