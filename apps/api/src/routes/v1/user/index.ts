import { Router } from 'express'
import authMiddleWare from '../../../middleware/authMiddleware'
import { getUser } from './controller'

const user: Router = Router()

user.use(authMiddleWare)

user.use('/me', getUser)

export default user
