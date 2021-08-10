import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle` 
  * {
    box-sizing: border-box;
  }

  html,
  body {
    font-family: "San Francisco Pro";
    width: 100vw;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
  }

  abbr, blockquote, body, button, dd, dl, dt, fieldset, figure, form, h1, h2, h3, h4, h5, h6, hgroup, input, legend, li, ol, p, pre, ul {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;
