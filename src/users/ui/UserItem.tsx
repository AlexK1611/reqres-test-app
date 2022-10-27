import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { UsersRoutes } from 'users/helpers/usersTypes'
import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Typography
} from '@mui/material'

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
        <Card
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            <CardMedia
                component='img'
                sx={{ width: '100%' }}
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
        </Card>
    )
}

export default UserItem