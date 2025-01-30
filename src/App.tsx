import { ThemeProvider } from 'styled-components'
import GlobalStyle from './css/globalStyles'
import theme from './css/theme'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Placeholder from './pages/Placeholder'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<div>ROOT PAGE</div>} />
          <Route path="/placeholder" element={<Placeholder />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App

// Use the links below to navigate between pages:
//   const navigate = useNavigate();
// navigate("/profile")
