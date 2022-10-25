import { FC } from 'react'

import { useSelector } from 'react-redux'
import { selectToken } from 'auth/store/authSelectors'

import { Outlet, Navigate } from 'react-router-dom'
import { AuthRoutes } from 'auth/helpers/authTypes'

export const UserRoutes: FC = () => {
    const token = useSelector(selectToken)
    return token ? <Outlet /> : <Navigate to={AuthRoutes.Login} />
}