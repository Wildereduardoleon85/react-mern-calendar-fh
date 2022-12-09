import { useDispatch, useSelector } from 'react-redux'
import { calendarApi } from '../api'
import { showErrors } from '../helpers'
import { onChecking, onLogin, onLogout, clearErrorMessage } from '../store'

const setToken = (token) => {
  localStorage.setItem('token', token)
  localStorage.setItem('token-init-date', new Date().getTime())
}

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const startLogin = async ({ email, password }) => {
    dispatch(onChecking())

    try {
      const { data } = await calendarApi.post('/auth', { email, password })
      const { name, uid, token } = data

      setToken(token)

      dispatch(onLogin({ name, uid }))
    } catch (error) {
      const errors = showErrors(error)
      dispatch(onLogout(errors))

      setTimeout(() => {
        dispatch(clearErrorMessage())
      }, 10)
    }
  }

  const startRegister = async ({ name, email, password }) => {
    dispatch(onChecking())

    try {
      const { data } = await calendarApi.post('/auth/new', {
        email,
        password,
        name,
      })

      setToken(data.token)

      dispatch(onLogin({ name: data.name, uid: data.uid }))
    } catch (error) {
      const errors = showErrors(error)
      dispatch(onLogout(errors))

      setTimeout(() => {
        dispatch(clearErrorMessage())
      }, 10)
    }
  }

  const checkAuthToken = async () => {
    const token = localStorage.getItem('token')

    if (!token) {
      dispatch(onLogout())
      return
    }

    dispatch(onChecking())

    try {
      const { data } = await calendarApi.get('auth/renew')

      setToken(data.token)

      dispatch(onLogin({ name: data.name, uid: data.uid }))
    } catch (error) {
      localStorage.clear()
      dispatch(onLogout())
    }
  }

  const startLogout = () => {
    localStorage.clear()
    dispatch(onLogout())
  }

  return {
    // state
    status,
    user,
    errorMessage,

    // methods
    startLogin,
    startRegister,
    checkAuthToken,
    startLogout,
  }
}
