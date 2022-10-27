export enum UsersRoutes {
    Users = '/users',
    User = '/users/:id'
}

export interface User {
    avatar: string,
    email: string,
    first_name: string,
    id: number,
    last_name: string
}

export interface FetchUsersResponse {
    data: User[],
    total_pages: number
}

export interface FetchUserResponse {
    data: User
}