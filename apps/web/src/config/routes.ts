import { lazy } from 'react'

export const LazyRoutes = {
  login: lazy(() => import('@/pages/Login')),
  signup: lazy(() => import('@/pages/Signup')),
  dashboard: lazy(() => import('@/pages/Dashboard')),
  view: lazy(() => import('@/pages/view')),
}
