import { FC } from 'react'

import { useSelector } from 'react-redux'
import { selectToken } from 'auth/store/authSelectors'

import { Outlet, Navigate } from 'react-router-dom'
import { HomeRoutes } from 'home/helpers/homeTypes'

import GuestLayout from 'app/components/GuestLayout'

export const ProtectedGuestRoutes: FC = () => {
    const token = useSelector(selectToken)
    return !token ? (
        <GuestLayout>
            <Outlet />
        </GuestLayout>

    ) : (
        <Navigate to={HomeRoutes.Main} />
    )
}