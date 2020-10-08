import styled from 'styled-components';

const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;

  @media(min-width: ${props => props.theme.breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Styled = {
  Container
}