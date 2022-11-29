import { useDispatch, useSelector } from 'react-redux'
import { calendarApi } from '../api'
import { onChecking, onLogin, onLogout, clearErrorMessage } from '../store'

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const startLogin = async ({ email, password }) => {
    dispatch(onChecking())

    try {
      const { data } = await calendarApi.post('/auth', { email, password })
      const { name, uid, token } = data

      localStorage.setItem('token', token)
      localStorage.setItem('token-init-date', new Date().getTime())

      dispatch(onLogin({ name, uid }))
    } catch (error) {
      console.log(error)
      dispatch(onLogout(error.response.data.msg))

      setTimeout(() => {
        dispatch(clearErrorMessage())
      }, 10)
    }
  }

  return {
    // state
    status,
    user,
    errorMessage,

    // methods
    startLogin,
  }
}
