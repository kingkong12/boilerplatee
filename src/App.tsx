import { ThemeProvider } from 'styled-components'
import GlobalStyle from './css/globalStyles'
import theme from './css/theme'
import Placeholder from './pages/Placeholder'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Placeholder />
    </ThemeProvider>
  )
}

export default App
