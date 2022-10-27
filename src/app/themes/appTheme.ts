import { createTheme } from '@mui/material/styles'

export const appTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#00C4F5',
            dark: 'rgba(0, 0, 0, 0.8)'
        }
    },
    typography: {
        h1: {
            fontSize: '50px',
            textAlign: 'center',
            color: '#00C4F5'
        },
        h2: {
            fontSize: '25px',
            textAlign: 'center',
            color: '#00C4F5'
        },
        button: {
            fontSize: '17px',
            color: '#00C4F5'
        },
        body1: {
            fontSize: '25px',
            color: '#00C4F5'
        },
        caption: {
            fontSize: '15px'
        }
    }
})