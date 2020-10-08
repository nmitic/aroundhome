import styled, { createGlobalStyle } from 'styled-components';

const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${props => props.theme.fonts.roboto};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export const Styled = {
  Container,
  GlobalStyle
}