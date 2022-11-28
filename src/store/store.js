import { configureStore } from '@reduxjs/toolkit'
import { uiSlice, calendarSlice, authSlice } from './'

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    calendar: calendarSlice.reducer,
    auth: authSlice.reducer,
  },
  /**
   * This configuration is used to prevent the warning console related
   * to try to serialize the date format
   */
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
