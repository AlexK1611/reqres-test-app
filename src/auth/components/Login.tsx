import { FC } from 'react'
import { Typography } from '@mui/material'
import AuthForm from 'auth/components/AuthForm'
import TransparentPaper from 'auth/ui/TransparentPaper'
import { AuthFormTypes } from 'auth/helpers/authTypes'

const Login: FC = () => {
    return (
        <TransparentPaper>
            <Typography variant='h2'>Login</Typography>
            <AuthForm type={AuthFormTypes.Login} />
        </TransparentPaper>
    )
}

export default Login