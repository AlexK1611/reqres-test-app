import { FC } from 'react'
import { Typography } from '@mui/material'
import AuthForm from 'auth/components/AuthForm'
import TransparentPaper from 'auth/ui/TransparentPaper'
import { AuthFormTypes } from 'auth/helpers/authTypes'

const Register: FC = () => {
    return (
        <TransparentPaper>
            <Typography variant='h2'>Register</Typography>
            <AuthForm type={AuthFormTypes.Register} />
        </TransparentPaper>
    )
}

export default Register