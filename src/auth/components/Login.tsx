import { FC } from 'react'
import { Paper, Stack, Typography } from '@mui/material'
import AuthForm from 'auth/components/AuthForm'
import { useNavigate } from 'react-router-dom'
import { AuthFormTypes, AuthRoutes } from 'auth/helpers/authTypes'

const Login: FC = () => {
    const navigate = useNavigate()
    const goToRegisterPage = () => {
        navigate(AuthRoutes.Register)
    }
    return (
        <Paper
            variant='outlined'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '15px',
                width: '30%',
                padding: '30px',
                borderRadius: '30px'
            }}
        >
            <Typography sx={{ textAlign: 'center' }}>
                Login
            </Typography>
            <AuthForm type={AuthFormTypes.Login} />
            <Stack spacing={1} direction='row'>
                <Typography component='span'>
                    Doesn't have an account?
                </Typography>
                <Typography component='a' onClick={goToRegisterPage}>
                    Register now!
                </Typography>
            </Stack>
        </Paper>
    )
}

export default Login