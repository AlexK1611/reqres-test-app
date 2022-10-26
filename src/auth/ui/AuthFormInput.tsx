import { FC } from 'react'
import { FormHelperText, TextField } from '@mui/material'
import { Controller, Control } from 'react-hook-form'
import { AuthData } from 'auth/helpers/authTypes'

interface AuthFormInputProps {
    name: keyof AuthData,
    label: string,
    control: Control<AuthData, any>
    type: 'text' | 'password'
}

const AuthFormInput: FC<AuthFormInputProps> = ({
    name,
    label,
    control,
    type
}) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field, formState }) => (
                <TextField
                    {...field}
                    size='small'
                    label={label}
                    type={type}
                    error={Boolean(formState.errors[name])}
                    helperText={
                        <FormHelperText component='span'>
                            {formState.errors[name]?.message}
                        </FormHelperText>
                    }
                />
            )}
        />
    )
}

export default AuthFormInput