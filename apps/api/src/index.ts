import createServer from './server'

const app = createServer()

const PORT = 3000

export const server = app.listen(PORT, () => {
  console.log(`Server is listneing on ${PORT}`)
})
