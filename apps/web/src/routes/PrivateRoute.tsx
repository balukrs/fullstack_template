import { useQuery } from '@tanstack/react-query'
import { getUser } from '@/api/users'
import { Navigate, Outlet } from 'react-router'
import Navbar from '@/components/common/Navbar'

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
    <div className="min-h-screen w-full bg-amber-950">
      <Navbar />
      <div className="container h-full mx-auto overflow-x-hidden">
        <Outlet />
      </div>
    </div>
  )
}

export default PrivateRoute
