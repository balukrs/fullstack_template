type tokenType = {
  id: string
  email: string
}

declare namespace Express {
  interface Request {
    tokenDetails?: tokenType
  }
}
