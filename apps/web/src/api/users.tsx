import config from '../config'
import type { MeResponse, SignUpResponse, LoginResponse } from '@template/shared'

export const getUser = async (): Promise<MeResponse | undefined> => {
  const response = await fetch(`${config.endpoint}/user/me`, { credentials: 'include' })

  if (!response?.ok) {
    throw new Error(`Request failed ${response.status}`)
  }

  return response.json()
}

export const addUser = async (obj: {
  email: string
  password: string
}): Promise<SignUpResponse | undefined> => {
  const response = await fetch(`${config.endpoint}/auth/sign-up`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(obj),
  })

  if (!response?.ok) {
    throw new Error(`Request failed ${response.status}`)
  }

  return response.json()
}

export const loginUser = async (obj: {
  email: string
  password: string
}): Promise<LoginResponse | undefined> => {
  const response = await fetch(`${config.endpoint}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(obj),
    credentials: 'include',
  })

  if (!response?.ok) {
    throw new Error(`Request failed ${response.status}`)
  }

  return response.json()
}
