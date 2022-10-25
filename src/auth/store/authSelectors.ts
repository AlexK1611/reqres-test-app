import { createSelector } from 'reselect'
import { AppState } from 'app/helpers/appTypes'

const selectAuth = (state: AppState) => state.auth

export const selectToken = createSelector(
    selectAuth,
    auth => auth.token
)

export const selectUserId = createSelector(
    selectAuth,
    auth => auth.id
)

export const selectAuthLoading = createSelector(
    selectAuth,
    auth => auth.isLoading
)

export const selectAuthError = createSelector(
    selectAuth,
    auth => auth.isError
)