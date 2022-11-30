import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'not-authenticated', // 'authenticated' | 'not-authenticated' | 'checking'
    user: {
      name: '',
      uid: '',
    },
    errorMessage: null,
  },
  reducers: {
    onChecking: (state) => {
      state.status = 'checking'
      state.user = {}
      state.errorMessage = null
    },

    onLogin: (state, { payload }) => {
      const { name, uid } = payload

      state.status = 'authenticated'
      state.user = { name, uid }
      state.errorMessage = null
    },

    onLogout: (state, { payload }) => {
      state.status = 'not-authenticated'
      state.user = {}
      state.errorMessage = payload
    },

    clearErrorMessage: (state) => {
      state.errorMessage = null
    },
  },
})

export const { onChecking, onLogin, onLogout, clearErrorMessage } =
  authSlice.actions
