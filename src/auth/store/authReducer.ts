import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { authSlice } from 'auth/store/authSlice'

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token', 'id']
}

export const authReducer = persistReducer(persistConfig, authSlice.reducer)