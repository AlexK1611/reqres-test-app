import { FC, ReactNode } from 'react'
import { Box } from '@mui/material'
import GuestBackground from 'assets/images/guest-background.jpg'

interface GuestLayoutProps {
    children: ReactNode
}

const GuestLayout: FC<GuestLayoutProps> = ({ children }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundImage: `url(${GuestBackground})`
            }}
        >
            {children}
        </Box>
    )
}

export default GuestLayout