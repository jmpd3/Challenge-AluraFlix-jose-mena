import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
    font-family: 'Pixelify Sans', sans-serif;
  }

  body, html {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    cursor: url(src/assets/raton.png), default;
    
    
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.color};
  }

  main {
    flex: 1;
  }
button, a
{
  cursor: url(src/assets/mano.png), pointer;
}
input, textarea
{
  cursor: url(src/assets/texto.png), text;
}

`;

export default GlobalStyles;
