export const extractErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message
  }
  if (error && typeof error === 'object' && 'message' in error) {
    return typeof error.message === 'string' ? error.message : 'Unknown Error Occured'
  }

  if (error && typeof error === 'string') {
    return error
  }

  return 'Unknown Error Occured'
}
