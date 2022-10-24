import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from 'auth/store/authSlice'

export const appStore = configureStore({
  reducer: {
    auth: authSlice.reducer
  }
})