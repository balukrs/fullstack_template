// Shared types and utilities between frontend and backend
export * from './userResponses'

export interface SuccessResponse<T> {
  data?: T
  message: string
  success: boolean
}

// Add more shared types here as your project grows
