import { createTheme } from '@mui/material/styles'

export const appTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#00C4F5',
            dark: '#1C2527'
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
        body1: {
            fontSize: '25px',
            color: '#00C4F5'
        }
    }
})