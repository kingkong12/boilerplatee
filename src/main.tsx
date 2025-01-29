import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import GlobalStyle from './css/globalStyles'
import theme from './css/theme'
import { ThemeProvider } from 'styled-components'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>
)
