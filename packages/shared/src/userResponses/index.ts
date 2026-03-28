import type { SuccessResponse } from '../index'

export type MeResponse = SuccessResponse<{
  email: string
  id: string
}>
export type SignUpResponse = SuccessResponse<null>
export type LoginResponse = SuccessResponse<{ email: string; id: string }>
