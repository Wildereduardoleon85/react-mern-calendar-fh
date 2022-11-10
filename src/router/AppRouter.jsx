import { Routes, Route, Navigate } from 'react-router-dom'
import { LoginPage } from '../auth'
import { CalendarPage } from '../calendar'

export const AppRouter = () => {
  const isAuthenticated = true

  return (
    <Routes>
      {isAuthenticated ? (
        <Route path='/*' element={<CalendarPage />} />
      ) : (
        <Route path='auth/*' element={<LoginPage />} />
      )}

      <Route path='/*' element={<Navigate to='/auth/login' />} />
    </Routes>
  )
}
