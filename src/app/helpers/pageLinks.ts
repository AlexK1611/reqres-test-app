import { HomeRoutes } from 'home/helpers/homeTypes'
import { UsersRoutes } from 'users/helpers/usersTypes'

interface PageLink {
    path: HomeRoutes | UsersRoutes,
    title: string
}

export const pageLinks: PageLink[] = [
    {
        path: HomeRoutes.Main,
        title: 'Home'
    },
    {
        path: UsersRoutes.Users,
        title: 'Users'
    }
]