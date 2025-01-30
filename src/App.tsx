import { ThemeProvider } from 'styled-components'
import GlobalStyle from './css/globalStyles'
import theme from './css/theme'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Placeholder from './pages/Placeholder'
import { Provider } from 'react-redux'
import { store } from './redux/store/store'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<div>ROOT PAGE</div>} />
            <Route path="/placeholder" element={<Placeholder />} />
          </Routes>
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App

// Use the links below to navigate between pages:
//   const navigate = useNavigate();
// navigate("/profile")
