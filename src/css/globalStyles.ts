import { createGlobalStyle } from 'styled-components'
import Wallpaper from '../assets/svg/wallpaper.svg'
import colors from '../css/theme'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Inter';
        src: url('../assets/fonts/Inter-roman.var.ed4cd0c7c0b73726.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'NeueHaasGroteskDisplay';
        src: url('../assets/fonts/NeueHaasGroteskDisplay-Medium.70d15db057909a1c.ttf') format('truetype');
        font-weight: 500; /* Medium */
        font-style: normal;
    }

    @font-face {
        font-family: 'NeueHaasGroteskDisplay';
        src: url('../assets/fonts/NeueHaasGroteskDisplay-Regular.164db4cad0f851b7.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

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
    font-family: 'NeueHaasGroteskDisplay', Arial, sans-serif;
    line-height: 1.6;
    font-size: var(--default-font-size, 16px);
    color: ${colors.fontColor.primary};
    height: 100%;
    display: flex;
    background: url(${Wallpaper}) no-repeat center center;
    background-size: cover;
    background-attachment: fixed;
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
