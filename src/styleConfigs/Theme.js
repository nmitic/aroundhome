import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    danger: "tomato",
    success: "cyan",
    disabled: "beige",
    gray: "gray",
    skeleton: "#e2e5e7"
  },
  fonts: {
    roboto: 'Roboto, sans-serif'
  },
  fontSizes: {
    h1: "1.8rem",
    h2: "1.5rem",
    h3: "1.3rem",
    body: "1rem"
  },
  breakpoints: {
    desktop: '1024px'
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;