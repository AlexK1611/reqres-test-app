export enum AuthRoutes {
    Login = '/login',
    Register = '/register'
}

export interface AuthData {
    email: string,
    password: string
}

export enum AuthFormTypes {
    Login = 'login',
    Register = 'register'
}

export interface LoginResponse {
    token: string
}

export interface RegisterResponse extends LoginResponse {
    id: number
}