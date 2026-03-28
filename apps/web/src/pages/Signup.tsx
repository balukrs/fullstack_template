import { useNavigate } from 'react-router'
import { useReducer } from 'react'
import { reducer, initState, type storeType } from '@/stores/loginstore'
import { useMutation } from '@tanstack/react-query'
import { addUser } from '@/api/users'

const Signup = () => {
  const navigate = useNavigate()

  const [state, dispatch] = useReducer(reducer, initState)

  const { isPending, mutateAsync } = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      navigate('/login')
    },
  })

  const validate = () => {
    const error: storeType['error'] = {}

    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!state.email) {
      error.email = 'Email Required'
    }
    if (!state.password) {
      error.password = 'Password Required'
    }

    if (state.email && !reg.test(state.email)) {
      error.email = 'Invalid Email'
    }

    if (state.password && state.password.length < 8) {
      error.password = 'Min character should be 8'
    }

    return error
  }

  const handleSubmit = async () => {
    const err = validate()
    if (Object.keys(err).length) {
      dispatch({ type: 'UPDATE_ERROR', error: err })
      return
    }
    mutateAsync({ email: state.email, password: state.password })
  }

  return (
    <div className="bg-neutral-500 h-screen w-screen">
      <div className="flex justify-center items-center h-full p-4">
        <form
          className="bg-amber-800/50 min-w-[50%] p-4"
          onSubmit={(e) => {
            e.preventDefault()
            handleSubmit()
          }}
        >
          <h1 className="text-3xl font-bold mb-2">Sign Up</h1>
          <div className=" flex flex-col mb-2 gap-0.5">
            <label>Email</label>
            <input
              className=" border-2 p-1"
              value={state.email}
              onChange={(e) => {
                dispatch({ type: 'UPDATE_VALUE', field: 'email', value: e.target.value })
              }}
            />
            {state.error?.email && (
              <span className=" text-red-300 text-sm">{state.error?.email}</span>
            )}
          </div>
          <div className=" flex flex-col mb-2 gap-0.5">
            <label>Password</label>
            <input
              className=" border-2 p-1"
              value={state.password}
              type="password"
              onChange={(e) => {
                dispatch({ type: 'UPDATE_VALUE', field: 'password', value: e.target.value })
              }}
            />
            {state.error?.password && (
              <span className=" text-red-300 text-sm">{state.error?.password}</span>
            )}
          </div>
          <div>
            <button
              className=" bg-amber-600 w-full p-2 hover:bg-amber-600/75 cursor-pointer"
              type="submit"
              disabled={isPending}
            >
              {isPending ? 'Loading...' : 'Sign Up'}
            </button>
          </div>
          <div className="mt-4">
            <a className="text-sm text-gray-800 cursor-pointer" onClick={() => navigate('/login')}>
              Login
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
