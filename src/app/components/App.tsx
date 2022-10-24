import { FC } from 'react'
import { CssBaseline } from '@mui/material'
import { Routes, Route, Navigate } from 'react-router-dom'
import { UserRoutes } from 'app/utils/UserRoutes'
import Users from 'users/components/Users'
import { GuestRoutes } from 'app/utils/GuestRoutes'
import Login from 'auth/components/Login'

const App: FC = () => {
    return (
        <>
            <CssBaseline />
            <Routes>
                <Route element={<UserRoutes />}>
                    <Route path='/' element={<Users />} />
                </Route>
                <Route element={<GuestRoutes />}>
                    <Route path='/auth' element={<Login />} />
                </Route>
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </>
    )
}

export default App