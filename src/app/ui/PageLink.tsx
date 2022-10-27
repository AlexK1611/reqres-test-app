import { FC } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { HomeRoutes } from 'home/helpers/homeTypes'
import { UsersRoutes } from 'users/helpers/usersTypes'
import { ListItem, Typography } from '@mui/material'

interface PageLinkProps {
    path: HomeRoutes | UsersRoutes,
    title: string
}

const PageLink: FC<PageLinkProps> = ({ path, title }) => {
    const navigate = useNavigate()
    const goToPage = () => {
        navigate(path)
    }

    const location = useLocation()
    const checkActiveLink = () => {
        return location.pathname === path
    }

    return (
        <ListItem
            selected={checkActiveLink()}
            onClick={goToPage}
            sx={{ padding: '20px', cursor: 'pointer' }}
        >
            <Typography variant='button'>
                {title}
            </Typography>
        </ListItem>
    )
}

export default PageLink