import { AppProps } from "next/app";
import React, { FC } from "react";
import { createGlobalStyle } from "styled-components";

import Container from "components/Container";

const GlobalStyle = createGlobalStyle`
html,
body {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    Fira Sans,
    Droid Sans,
    Helvetica Neue,
    sans-serif;
  background-color: rgb(37, 45, 38);
}

#__next {
  width: 100%;
  height: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`;

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyle />
    <Container>
      <Component {...pageProps} />
    </Container>
  </>
);

export default MyApp;
