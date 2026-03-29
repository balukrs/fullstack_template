import { Router } from 'express'
import authMiddleWare from '../../../middleware/authMiddleware'
import {
  validationMiddleware,
  validationQueryMiddleware,
  validationParamsMiddleware,
} from '../../../middleware/validationMiddleware'
import { getUser, postTask, patchTask, getTasks, deleteTask } from './controller'

import { createSchema, updateSchema, getTasksSchema, deleteSchema } from './schema'

const user: Router = Router()

user.use(authMiddleWare)

user.get('/me', getUser)
user.post('/task', validationMiddleware(createSchema), postTask)
user.patch('/task', validationMiddleware(updateSchema), patchTask)
user.get('/tasks', validationQueryMiddleware(getTasksSchema), getTasks)
user.delete('/tasks', validationParamsMiddleware(deleteSchema), deleteTask)

export default user
