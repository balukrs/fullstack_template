import config from '../config'
import type { MeResponse } from '@template/shared'

export const getUser = async (): Promise<MeResponse | undefined> => {
  try {
    const response = await fetch(config.endpoint)

    if (!response?.ok) {
      throw new Error(`Request failed ${response.status}`)
    }

    const data = response.json()

    return data
  } catch (error) {
    console.error(error)
  }
}
