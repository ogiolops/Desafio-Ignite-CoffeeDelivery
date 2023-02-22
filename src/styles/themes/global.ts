import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
    text-decoration: none;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: ${(props) => props.theme['base-card']};
    max-width: 1440px;
    margin: 0 auto;

  }

  :focus {
    outline: 0; 
  }


  body, input, textarea, button {
    font-family: 'Roboto', sans-serif; 
    font-weight: 400;
    font-size: 1rem;
  }

`