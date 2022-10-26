import { FC } from 'react'
import { UsersRoutes } from 'users/helpers/usersTypes'
import Users from 'users/components/Users'
import User from 'users/components/User'

interface UsersRouterProps {
    path: UsersRoutes,
    element: FC<{}>
}

export const usersRouter: UsersRouterProps[] = [
    {
        path: UsersRoutes.Users,
        element: Users
    },
    {
        path: UsersRoutes.User,
        element: User
    }
]