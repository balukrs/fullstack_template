import { useQuery } from '@tanstack/react-query'
import { getUser } from '@/api/users'
import { Navigate, Outlet } from 'react-router'

const PrivateRoute = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['me'],
    queryFn: getUser,
    retry: false,
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError || !data?.data?.email) {
    return <Navigate replace to={'/'} />
  }

  return (
    <div>
      <Outlet />
    </div>
  )
}

export default PrivateRoute
