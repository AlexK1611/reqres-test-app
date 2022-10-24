import { FC } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectToken } from 'auth/store/authSelectors'

export const GuestRoutes: FC = () => {
    const token = useSelector(selectToken)
    return !token ? <Outlet /> : <Navigate to='/' />
}