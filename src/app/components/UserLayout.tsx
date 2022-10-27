import { FC, ReactNode } from 'react'

import { useDispatch } from 'react-redux'
import { AppDispatch } from 'app/helpers/appTypes'
import { logout } from 'auth/store/authSlice'

import { Box, Button, List, Typography } from '@mui/material'
import PageLink from 'app/ui/PageLink'
import { appTheme } from 'app/themes/appTheme'
import UserBackground from 'assets/images/user-background.jpg'

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
                height: '100vh',
                backgroundImage: `url(${UserBackground})`
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
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flex: 1,
                        paddingBottom: '30px',
                        backgroundColor: appTheme.palette.primary.dark
                    }}
                >
                    <List
                        sx={{
                            width: '100%',
                            height: '100%',
                            padding: 0
                        }}
                    >
                        {pageLinks.map(link => (
                            <PageLink
                                key={link.path}
                                path={link.path}
                                title={link.title}
                            />
                        ))}
                    </List>
                    <Button variant='outlined' onClick={handleLogout}>
                        Logout
                    </Button>
                </Box>
                <Box sx={{ flex: 5, padding: '60px' }}>
                    {children}
                </Box>
            </Box>
        </Box >
    )
}

export default UserLayout