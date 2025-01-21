import { createGlobalStyle } from "styled-components";
import mano from "../assets/mano.png";
import raton from "../assets/raton.png";
import texto from "../assets/texto.png";

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
    cursor: url(${raton}), default;
    
    
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
  cursor: url(${mano}), pointer;
}
input, textarea
{
  cursor: url(${texto}), text;
}

`;

export default GlobalStyles;
