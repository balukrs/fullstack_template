import { Router } from 'express'
import auth from './auth'
import user from './user'

const v1: Router = Router()

v1.use('/auth', auth)
v1.use('/user', user)

export default v1
