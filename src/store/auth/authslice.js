import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'checking', // 'authenticated' | 'not-authenticated' | 'checking'
    user: {},
    errorMessage: null,
  },
  reducers: {
    onChecking: (state) => {
      state.status = 'checking'
      state.user = {}
      state.errorMessage = null
    },

    onLogin: (state, { payload }) => {
      state.status = 'authenticated'
      state.user = payload
      state.errorMessage = null
    },
  },
})

export const { onChecking, onLogin } = authSlice.actions
