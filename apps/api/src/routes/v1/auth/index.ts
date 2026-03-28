import { Router } from 'express'
import validationMiddleware from '../../../middleware/validationMiddleware'
import { signupschema } from './schema'

// Controllers
import { signUp, login } from './controller'

const auth: Router = Router()

auth.post('/sign-up', validationMiddleware(signupschema), signUp)
auth.post('/login', validationMiddleware(signupschema), login)

export default auth
