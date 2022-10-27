import { createSlice } from '@reduxjs/toolkit'
import { fetchUsers, fetchUser } from 'users/store/usersThunks'
import { User } from 'users/helpers/usersTypes'

interface UsersState {
    userList: User[],
    totalPages: number,
    currentUser: User | null
}

const initialState: UsersState = {
    userList: [],
    totalPages: 0,
    currentUser: null
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        removeCurrentUser: state => {
            state.currentUser = null
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.userList = action.payload.data
            state.totalPages = action.payload.total_pages
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.currentUser = action.payload
        })
    }
})

export const { removeCurrentUser } = usersSlice.actions