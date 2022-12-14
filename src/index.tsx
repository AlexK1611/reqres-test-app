import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import { appStore } from 'app/store/appStore'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from 'app/store/appStore'

import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from '@mui/material/styles'
import { appTheme } from 'app/themes/appTheme'

import App from 'app/components/App'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <StrictMode>
    <Provider store={appStore}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <ThemeProvider theme={appTheme}>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
)