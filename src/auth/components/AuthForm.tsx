import { FC } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { selectAuthLoading } from 'auth/store/authSelectors'
import { AppDispatch } from 'app/helpers/appTypes'
import { fetchLogin, fetchRegister } from 'auth/store/authThunks'

import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { authSchema } from 'auth/helpers/authValidation'

import { Box, Button, CircularProgress } from '@mui/material'
import AuthFormInput from 'auth/ui/AuthFormInput'

import { AuthData, AuthFormTypes } from 'auth/helpers/authTypes'

interface AuthFormProps {
    type: AuthFormTypes
}

const AuthForm: FC<AuthFormProps> = ({ type }) => {
    const dispatch = useDispatch<AppDispatch>()
    const authLoading = useSelector(selectAuthLoading)

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

    return (
        <Box
            component='form'
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            <AuthFormInput
                name='email'
                label='Email'
                control={control}
            />
            <AuthFormInput
                name='password'
                label='Password'
                control={control}
            />
            {authLoading ? (
                <CircularProgress size={25} />
            ) : (
                <Button
                    variant='contained'
                    type='submit'
                    disabled={authLoading}
                >
                    Submit
                </Button>
            )}
        </Box>
    )
}

export default AuthForm