import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from 'auth/store/authReducer'
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

export const appStore = configureStore({
  reducer: {
    auth: authReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }
    })
})

export let persistor = persistStore(appStore)