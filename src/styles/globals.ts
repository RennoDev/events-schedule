import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}

html,
body,
#root {
  height: 100%;
}

html {
  font-size: 62.5%;

  @media (max-width: 768px) {
    font-size: 54%;
  }
}
`

export default GlobalStyle;