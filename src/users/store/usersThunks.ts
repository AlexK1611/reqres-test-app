import { createAsyncThunk } from '@reduxjs/toolkit'
import { api } from 'config/api'
import { FetchUserResponse, FetchUsersResponse, User } from 'users/helpers/usersTypes'

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (page: number): Promise<FetchUsersResponse> => {
        try {
            const response = await api.get<FetchUsersResponse>('users', {
                params: {
                    page,
                    per_page: 4
                }
            })
            return {
                data: response.data.data,
                total_pages: response.data.total_pages
            }
        } catch (error) {
            throw error
        }
    }
)

export const fetchUser = createAsyncThunk(
    'users/fetchUser',
    async (id: string): Promise<User> => {
        try {
            const response = await api.get<FetchUserResponse>(`users/${id}`)
            return response.data.data
        } catch (error) {
            throw error
        }
    }
)