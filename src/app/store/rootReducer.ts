import { combineReducers } from '@reduxjs/toolkit'
import { authReducer } from 'auth/store/authReducer'
import { usersSlice } from 'users/store/usersSlice'

export const rootReducer = combineReducers({
    auth: authReducer,
    users: usersSlice.reducer
})