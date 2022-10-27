import { FC, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from 'app/helpers/appTypes'
import { fetchUser } from 'users/store/usersThunks'
import { selectCurrentUser } from 'users/store/usersSelectors'

import { useParams } from 'react-router-dom'

import { Box, CardMedia, Stack, Typography } from '@mui/material'
import { removeCurrentUser } from 'users/store/usersSlice'

const User: FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const currentUser = useSelector(selectCurrentUser)

    const params = useParams()

    useEffect(() => {
        if (params.id) {
            dispatch(fetchUser(params.id))
        }
        return () => {
            dispatch(removeCurrentUser())
        }
    }, [dispatch, params.id])

    return (
        <>
            {currentUser && (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        alignItems: 'center'
                    }}
                >
                    <CardMedia
                        component='img'
                        image={currentUser.avatar}
                        sx={{ width: '300px', borderRadius: '15px' }}
                    />
                    <Stack spacing={3}>
                        <Typography variant='body1'>
                            {`Name: ${currentUser.first_name} ${currentUser.last_name}`}
                        </Typography>
                        <Typography variant='body1'>
                            {`Email: ${currentUser.email}`}
                        </Typography>
                    </Stack>
                </Box>
            )}
        </>
    )
}

export default User