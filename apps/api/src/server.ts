import express, { type Express, type Request, type Response } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { prisma } from './lib/prisma'

// Routes
import v1 from './routes/v1'
import errorMiddleWare from './middleware/errorMiddleware'

const createServer = (): Express => {
  const app = express()

  app
    .disable('x-powered-by')
    .disable('etag')
    .use(express.urlencoded({ extended: true }))
    .use(express.json())
    .use(cors({ credentials: true, origin: 'http://localhost:5173' }))
    .use(cookieParser())

  app.get('/health', (req: Request, res: Response) => {
    return res.json({ message: 'Good', success: true })
  })

  app.get('/test-db', async (req: Request, res: Response) => {
    try {
      const users = await prisma.user.findMany()
      return res.json({ message: 'Users', data: users })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'DB connection failed', success: false })
    }
  })

  app.use('/api/v1', v1)
  app.use(errorMiddleWare)

  return app
}

export default createServer
