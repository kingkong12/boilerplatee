import { createGlobalStyle } from 'styled-components'
import colors from '../css/theme'

const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scrollbar-width: none;
    }

    *::-webkit-scrollbar {
    display: none;
    }

    html, body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    font-size: var(--default-font-size, 16px);
    height: 100%;
    display: flex;
    }

    #root {
    height: 100vh;
    width: 100vw;
    }

    body::-webkit-scrollbar {
    display: none;
    }

    body {
    -ms-overflow-style: none;
    scrollbar-width: none;
    }
`

export default GlobalStyle
