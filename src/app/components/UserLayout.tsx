import { FC, ReactNode } from 'react'

import { useDispatch } from 'react-redux'
import { AppDispatch } from 'app/helpers/appTypes'
import { logout } from 'auth/store/authSlice'

import { Box, Button, Divider, List, Typography } from '@mui/material'
import PageLink from 'app/ui/PageLink'
import { appTheme } from 'app/themes/appTheme'

import { pageLinks } from 'app/helpers/pageLinks'

interface UserLayoutProps {
    children: ReactNode
}

const UserLayout: FC<UserLayoutProps> = ({ children }) => {
    const dispatch = useDispatch<AppDispatch>()
    const handleLogout = () => {
        dispatch(logout())
    }
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh'
            }}
        >
            <Box
                sx={{
                    padding: '15px',
                    backgroundColor: appTheme.palette.primary.dark
                }}
            >
                <Typography variant='h1'>
                    Reqres
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', flex: 1 }}>
                <List
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        flex: 1,
                        padding: 0,
                        backgroundColor: appTheme.palette.primary.dark
                    }}
                >
                    {pageLinks.map(link => (
                        <PageLink path={link.path} title={link.title} />
                    ))}
                    <Divider />
                    <Button variant='outlined' onClick={handleLogout}>
                        Logout
                    </Button>
                </List>
                <Box sx={{ flex: 5 }}>
                    {children}
                </Box>
            </Box>
        </Box >
    )
}

export default UserLayout