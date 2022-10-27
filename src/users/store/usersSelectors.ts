import { createSelector } from 'reselect'
import { AppState } from 'app/helpers/appTypes'

const selectUsers = (state: AppState) => state.users

export const selectUserList = createSelector(
    selectUsers,
    users => users.userList
)

export const selectUserPages = createSelector(
    selectUsers,
    users => users.totalPages
)

export const selectCurrentUser = createSelector(
    selectUsers,
    users => users.currentUser
)