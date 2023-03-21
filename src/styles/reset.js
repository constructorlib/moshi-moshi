import { css } from "styled-components";

export const reset = css`
  body {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-family: "Noto Sans", sans-serif;
  }
  html {
    //! ********************DISCLAIMER********************
    //* this resets Browser Defaults
    //* 1rem == 10px
    //! ********************DISCLAIMER********************
    font-size: 62.5%;
    scroll-behavior: smooth;
    scrollbar-width: none;
    //~ screen-width: 600px +
    @media only screen and (min-width: 37.5em) {
      font-size: 50%; //* 1rem = 8px
    }
  }
`;
