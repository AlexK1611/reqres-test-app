import { FC } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { selectAuthLoading, selectAuthError } from 'auth/store/authSelectors'
import { AppDispatch } from 'app/helpers/appTypes'
import { fetchLogin, fetchRegister } from 'auth/store/authThunks'

import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { authSchema } from 'auth/helpers/authValidation'

import { Box, Button, Stack, Typography } from '@mui/material'
import AuthFormInput from 'auth/ui/AuthFormInput'

import { useNavigate } from 'react-router-dom'
import { AuthData, AuthFormTypes, AuthRoutes } from 'auth/helpers/authTypes'


interface AuthFormProps {
    type: AuthFormTypes
}

const AuthForm: FC<AuthFormProps> = ({ type }) => {
    const dispatch = useDispatch<AppDispatch>()
    const authLoading = useSelector(selectAuthLoading)
    const authError = useSelector(selectAuthError)

    const { control, handleSubmit } = useForm<AuthData>({
        resolver: yupResolver(authSchema),
        defaultValues: { email: '', password: '' }
    })

    const onSubmit: SubmitHandler<AuthData> = data => {
        type === AuthFormTypes.Login ? (
            dispatch(fetchLogin(data))
        ) : (
            dispatch(fetchRegister(data))
        )
    }

    const navigate = useNavigate()
    const switchAuthPage = () => {
        navigate(
            type === AuthFormTypes.Login
                ? AuthRoutes.Register
                : AuthRoutes.Login
        )
    }

    return (
        <Box
            component='form'
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '15px'
            }}
        >
            <Stack>
                <AuthFormInput
                    name='email'
                    label='Email'
                    control={control}
                    type='text'
                />
                <AuthFormInput
                    name='password'
                    label='Password'
                    control={control}
                    type='password'
                />
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button
                    variant='outlined'
                    type='submit'
                    disabled={authLoading}
                >
                    Submit
                </Button>
                <Button
                    variant='outlined'
                    onClick={switchAuthPage}
                    disabled={authLoading}
                >
                    {type === AuthFormTypes.Login ? 'Register' : 'Login'}
                </Button>
            </Stack>
            {authError && (
                <Typography
                    color='error'
                    variant='caption'
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translate(-50%, 100%)',
                        width: '100%',
                        textAlign: 'center'
                    }}
                >
                    Something went wrong.
                </Typography>
            )}
        </Box>
    )
}

export default AuthForm