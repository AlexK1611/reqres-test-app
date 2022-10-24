import { createSelector } from 'reselect'
import { AppState } from 'app/helpers/appTypes'

const selectAuth = (state: AppState) => state.auth

export const selectToken = createSelector(
    selectAuth,
    auth => auth.token
)