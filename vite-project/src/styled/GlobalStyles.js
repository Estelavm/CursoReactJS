import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --font-family-header: "Playfair Display", serif;
    --font-family-marca: "Dancing Script", cursive;
    --font-family-main: "Montserrat", sans-serif;
    --font-weight-normal: 400;
    --font-weight-bold: 700;
    --font-family-footer: "Lato", sans-serif;
    --background-color-header: linear-gradient(135deg, rgba(245, 166, 35, 0.8) 0%, rgba(245, 166, 35, 0.5) 100%);
    --background-color-list: rgba(255, 255, 255, 0.2);
    --background-color-footer: #8C564B;
    --background-color-general: #FFF8E7;
    --color-text: #333333;
    --border-radius-links: 3px;
    --font-family-system: system-ui, Avenir, Helvetica, Arial, sans-serif;
    --color-light-text: rgba(255, 255, 255, 0.87);
    --background-dark: #242424;
    --background-light: #ffffff;
    --color-link: #646cff;
    --color-link-hover: #535bf2;
    --color-link-hover-light: #747bff;
    --button-bg-dark: #1a1a1a;
    --button-bg-light: #f9f9f9;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-family-header);
    font-weight: var(--font-weight-normal);
  }

  body {
    background-color: var(--background-color-general);
    color: var(--color-text);
    overflow-x: hidden;
    width: 100%;
    min-width: 320px;
    height: 100vh;
    font-family: var(--font-family-system);
    line-height: 1.5;
    font-weight: 400;
    color-scheme: light dark;
  }

  main {
  padding: 0;
  background-color: var(--background-color-general);
  
}


  ul {
    list-style: none;
  }

  a {
    font-weight: 500;
    color: var(--color-link);
    text-decoration: inherit;
    transition: color 0.25s;
  }

  a:hover {
    color: var(--color-link-hover);
  }

  h1 {
    font-size: 3.2em;
    line-height: 1.1;
    text-align: center;
  }

  h2, h3 {
    text-align: center;
  }

  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: var(--button-bg-dark);
    cursor: pointer;
    transition: border-color 0.25s;
  }

  button:hover {
    border-color: var(--color-link);
  }

  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }

  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }

  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  .logo.react:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }

  .card {
    padding: 2em;
  }

  .read-the-docs {
    color: #888;
  }

  .titulo-reseñas, .parrafo-reseñas {
    width: 100%;
    text-align: center;
    margin: 10px 0;
  }

  .total {
    font-size: 1.2em;
    font-weight: bold;
    margin-top: 20px;
    text-align: center;
  }

  .btn-descripcion {
    margin-top: 2vh;
    padding: 10px 15px;
    background-color: #6c63ff;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .btn-descripcion:hover {
    background-color: #5849d8;
  }

  .descripcion-ampliada {
    margin-top: 10px;
    padding: 10px;
    background-color: #f8f8f8;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
    line-height: 1.4;
  }

  footer {
    font-family: var(--font-family-footer);
    background-color: var(--background-color-footer);
    color: white;
  }

  @media (prefers-color-scheme: light) {
    :root {
      color: #213547;
      background-color: var(--background-light);
    }
    a:hover {
      color: var(--color-link-hover-light);
    }
    button {
      background-color: var(--button-bg-light);
    }
  }
`;

export default GlobalStyles;
