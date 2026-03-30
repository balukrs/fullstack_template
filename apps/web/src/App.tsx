import { BrowserRouter, Routes, Route } from 'react-router'
import PrivateRoute from './routes/PrivateRoute'
import PublicRoute from './routes/PublicRoute'
import { LazyRoutes } from './config'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route index element={<LazyRoutes.dashboard />} />
          <Route path="view" element={<LazyRoutes.view />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LazyRoutes.login />} />
          <Route path="/signup" element={<LazyRoutes.signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
