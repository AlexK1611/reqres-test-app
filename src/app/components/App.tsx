import { FC } from 'react'

import { CssBaseline } from '@mui/material'

import { Routes, Route, Navigate } from 'react-router-dom'

import { ProtectedUserRoutes } from 'app/utils/ProtectedUserRoutes'
import { ProtectedGuestRoutes } from 'app/utils/ProtectedGuestRoutes'

import { HomeRoutes } from 'home/helpers/homeTypes'
import Home from 'home/components/Home'

import { usersRouter } from 'users/helpers/usersRouter'
import { authRouter } from 'auth/helpers/authRouter'

const App: FC = () => {
    return (
        <>
            <CssBaseline />
            <Routes>
                <Route element={<ProtectedUserRoutes />}>
                    <Route path={HomeRoutes.Main} element={<Home />} />
                    {usersRouter.map(({ path, element: Element }) => (
                        <Route
                            key={path}
                            path={path}
                            element={<Element />}
                        />
                    ))}
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
                <Route path='*' element={<Navigate to={HomeRoutes.Main} />} />
            </Routes>
        </>
    )
}

export default App