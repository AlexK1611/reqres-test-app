import { FC } from 'react'
import { Paper, Stack, Typography } from '@mui/material'
import AuthForm from 'auth/components/AuthForm'
import { useNavigate } from 'react-router-dom'
import { AuthFormTypes, AuthRoutes } from 'auth/helpers/authTypes'

const Register: FC = () => {
    const navigate = useNavigate()
    const goToLoginPage = () => {
        navigate(AuthRoutes.Login)
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
                Register
            </Typography>
            <AuthForm type={AuthFormTypes.Register} />
            <Stack spacing={1} direction='row'>
                <Typography component='span'>
                    Already a member?
                </Typography>
                <Typography component='a' onClick={goToLoginPage}>
                    Log in!
                </Typography>
            </Stack>
        </Paper>
    )
}

export default Register