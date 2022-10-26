import { FC } from 'react'

import { useSelector } from 'react-redux'
import { selectToken } from 'auth/store/authSelectors'

import { Outlet, Navigate } from 'react-router-dom'
import { AuthRoutes } from 'auth/helpers/authTypes'

import UserLayout from 'app/components/UserLayout'

export const ProtectedUserRoutes: FC = () => {
    const token = useSelector(selectToken)
    return token ? (
        <UserLayout>
            <Outlet />
        </UserLayout>
    ) : (
        <Navigate to={AuthRoutes.Login} />
    )
}