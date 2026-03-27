import * as z from 'zod'

export const signupschema = z.strictObject({
  email: z.email(),
  password: z.string(),
})
