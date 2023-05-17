import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const GlobalStyle = css`
  html {
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
    background: #eae6df;
  }
`;

export const Header = styled.div`
  min-height: 130px;
  background: #00a884;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 0;
`;

export const AppWrapper = styled.div`
  height: 100vh;
`;

export const PageDefaultWrapper = styled.div`
  padding: 24px;
`;
