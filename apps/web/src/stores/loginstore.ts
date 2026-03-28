export type storeType = {
  email: string
  password: string
  error:
    | {
        email?: string
        password?: string
      }
    | undefined
}

type actionType = {
  type: 'UPDATE_VALUE' | 'UPDATE_ERROR' | 'RESET'
  field?: string
  value?: string
  error?: storeType['error']
}

export const initState: storeType = {
  email: '',
  password: '',
  error: {},
}

export function reducer(state: storeType, action: actionType) {
  switch (action.type) {
    case 'UPDATE_VALUE':
      return {
        ...state,
        ...(action?.field
          ? {
              [`${action.field}`]: action?.value,
              error: { ...state.error, [`${action.field}`]: '' },
            }
          : {}),
      }

    case 'UPDATE_ERROR':
      return { ...state, error: action.error }

    case 'RESET':
      return initState

    default:
      return initState
  }
}
