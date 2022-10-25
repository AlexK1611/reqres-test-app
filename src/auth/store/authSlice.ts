import { createSlice } from '@reduxjs/toolkit'
import { fetchLogin, fetchRegister } from 'auth/store/authThunks'

interface AuthState {
    token: string | null,
    id: number | null,
    isLoading: boolean,
    isError: boolean
}

const initialState: AuthState = {
    token: null,
    id: null,
    isLoading: false,
    isError: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchLogin.pending, state => {
            state.isError = false
            state.isLoading = true
        })
        builder.addCase(fetchLogin.fulfilled, (state, action) => {
            state.isLoading = false
            state.token = action.payload
        })
        builder.addCase(fetchLogin.rejected, state => {
            state.isLoading = false
            state.isError = true
        })
        builder.addCase(fetchRegister.pending, state => {
            state.isError = false
            state.isLoading = true
        })
        builder.addCase(fetchRegister.fulfilled, (state, action) => {
            state.isLoading = false
            state.token = action.payload.token
            state.id = action.payload.id
        })
        builder.addCase(fetchRegister.rejected, state => {
            state.isLoading = false
            state.isError = true
        })
    }
})