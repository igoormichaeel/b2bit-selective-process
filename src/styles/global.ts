import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --gray-50: #fafafa;
    --gray-100: #f1f1f1;
    --gray-800: #262626;

    --blue-50: #f1f5f9;
    --blue-800: #02274f;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15 px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; // 14 px
    }
  }

  body, input, textarea, button {
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;
