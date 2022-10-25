import { FC } from 'react'

import { useSelector } from 'react-redux'
import { selectToken } from 'auth/store/authSelectors'

import { Outlet, Navigate } from 'react-router-dom'

import { Box } from '@mui/material'

export const GuestRoutes: FC = () => {
    const token = useSelector(selectToken)
    return !token ? (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }}
        >
            <Outlet />
        </Box>
    ) : (
        <Navigate to='/' />
    )
}