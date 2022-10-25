import { createAsyncThunk } from '@reduxjs/toolkit'
import { api } from 'config/api'
import { AuthData, LoginResponse, RegisterResponse } from 'auth/helpers/authTypes'

export const fetchLogin = createAsyncThunk(
    'auth/login',
    async (data: AuthData): Promise<string> => {
        try {
            const response = await api.post<LoginResponse>('login', data)
            return response.data.token
        } catch (error) {
            throw error
        }
    }
)

export const fetchRegister = createAsyncThunk(
    'auth/register',
    async (data: AuthData): Promise<RegisterResponse> => {
        try {
            const response = await api.post<RegisterResponse>('register', data)
            return response.data
        } catch (error) {
            throw error
        }
    }
)