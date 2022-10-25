import { combineReducers } from '@reduxjs/toolkit'
import { authReducer } from 'auth/store/authReducer'

export const rootReducer = combineReducers({
    auth: authReducer
})