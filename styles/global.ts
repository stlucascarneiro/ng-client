import { createGlobalStyle } from 'styled-components'
import typography from 'atoms/typography'

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html{
        overflow: hidden;
        position: relative;
    }
    body {
        display: flex;
        justify-content: center;
        overflow: auto;
        font-family: 'IBM Plex Sans', sans-serif;
        color: ${({ theme }) => theme.color.element.inverseRegular};
        background:linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${'images/backgrounds/banner.jpg'});
        background-size: contain;
        background-position: center top;
    }
    #__next{
        width: 360px;
        height: 100vh;
        display: flex;
        flex-direction: column;
    }
    ${typography}
`
