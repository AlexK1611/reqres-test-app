import { FC } from 'react'

import { CssBaseline } from '@mui/material'

import { Routes, Route, Navigate } from 'react-router-dom'

import { ProtectedUserRoutes } from 'app/utils/ProtectedUserRoutes'
import Users from 'users/components/Users'
import { ProtectedGuestRoutes } from 'app/utils/ProtectedGuestRoutes'
import { authRouter } from 'auth/helpers/authRouter'

const App: FC = () => {
    return (
        <>
            <CssBaseline />
            <Routes>
                <Route element={<ProtectedUserRoutes />}>
                    <Route path='/' element={<Users />} />
                </Route>
                <Route element={<ProtectedGuestRoutes />}>
                    {authRouter.map(({ path, element: Element }) => (
                        <Route
                            key={path}
                            path={path}
                            element={<Element />}
                        />
                    ))}
                </Route>
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </>
    )
}

export default App