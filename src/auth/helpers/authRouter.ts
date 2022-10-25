import { FC } from 'react'
import { AuthRoutes } from 'auth/helpers/authTypes'
import Login from 'auth/components/Login'
import Register from 'auth/components/Register'

interface AuthRouterProps {
    path: AuthRoutes,
    element: FC<{}>
}

export const authRouter: AuthRouterProps[] = [
    {
        path: AuthRoutes.Login,
        element: Login
    },
    {
        path: AuthRoutes.Register,
        element: Register
    }
]