import { createSlice } from '@reduxjs/toolkit'
import { AuthState } from 'auth/helpers/authTypes'

const initialState: AuthState = {
    token: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {}
})