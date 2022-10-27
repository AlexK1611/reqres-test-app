import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { UsersRoutes } from 'users/helpers/usersTypes'
import {
    Box,
    Button,
    CardMedia,
    Typography
} from '@mui/material'
import { appTheme } from 'app/themes/appTheme'

interface UserItemProps {
    firstName: string,
    lastName: string,
    avatar: string,
    id: number
}

const UserItem: FC<UserItemProps> = ({
    firstName,
    lastName,
    avatar,
    id
}) => {
    const navigate = useNavigate()
    const goToUserPage = () => {
        navigate(`${UsersRoutes.Users}/${id}`)
    }
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: appTheme.palette.primary.dark,
                borderRadius: '15px'
            }}
        >
            <CardMedia
                component='img'
                sx={{ width: '100%', borderRadius: '15px' }}
                image={avatar}
            />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '15px'
                }}
            >
                <Typography>
                    {`${firstName} ${lastName}`}
                </Typography>
                <Button variant='outlined' onClick={goToUserPage}>
                    Info
                </Button>
            </Box>
        </Box>
    )
}

export default UserItem