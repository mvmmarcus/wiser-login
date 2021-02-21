import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`

    * {
      padding: 0;
      box-sizing: border-box;
      margin: 0;
    }

    html,
    body,
    #__next {
      height: 100%;
    }

${({ theme }) => css`
  body {
    font-family: ${theme.font.family};
    background: ${theme.colors.mainBg};
  }
`}

    

`

export default GlobalStyles
