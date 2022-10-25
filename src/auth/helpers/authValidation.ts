import * as yup from 'yup'

export const authSchema = yup.object({
    email: yup.string().required('Email is required').email('Invalid email format'),
    password: yup.string().required('Password is required').min(4, 'At least 4 characters')
})