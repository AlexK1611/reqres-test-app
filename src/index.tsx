import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles'
import { appTheme } from 'app/themes/appTheme'
import App from 'app/components/App'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <StrictMode>
    <ThemeProvider theme={appTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>
)