import 'dotenv/config'

import { PrismaPg, PrismaClient } from '@template/db'

const connectionString = `${process.env.DATABASE_URL}`

const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })

export { prisma }
