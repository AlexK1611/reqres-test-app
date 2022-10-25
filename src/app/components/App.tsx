import { FC } from 'react'

import { CssBaseline } from '@mui/material'

import { Routes, Route, Navigate } from 'react-router-dom'

import { UserRoutes } from 'app/utils/UserRoutes'
import Users from 'users/components/Users'
import { GuestRoutes } from 'app/utils/GuestRoutes'
import { authRouter } from 'auth/helpers/authRouter'

const App: FC = () => {
    return (
        <>
            <CssBaseline />
            <Routes>
                <Route element={<UserRoutes />}>
                    <Route path='/' element={<Users />} />
                </Route>
                <Route element={<GuestRoutes />}>
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