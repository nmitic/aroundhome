import styled, { css } from 'styled-components';

const Listing = styled.div`
  @media(min-width: ${props => props.theme.breakpoints.desktop}) {
    height: calc(100vh - 165px);
    overflow-y: scroll;
  }
`;

const Container = styled.div`
  text-align: center;
`;

const Name = styled.h1`
  font-size: ${props => props.theme.fontSizes.h1};
`;

const Day = styled.h3`
  font-size: ${props => props.theme.fontSizes.h2};
`;

const SelectedDay = styled.h3`
  margin: 0;
  font-size: ${props => props.theme.fontSizes.h2};
`;

const SelectedSlot = styled.div`
  min-height: 90px;
  border: 1px solid ${props => props.theme.colors.gray};
  margin: 0 5px;
  border-radius: 5px;

  position: relative;
  font-size: ${props => props.theme.fontSizes.h2};

  display: flex;
  flex-direction: column;
  justify-content: center;

  ${props => props.selected && css`
    background-color: ${props => props.theme.colors.success};
  `}
`;

const Clear = styled.div`
  color: ${props => props.theme.colors.danger};
  cursor: pointer;
  font-weight: bold;
  font-size: ${props => props.theme.fontSizes.body};

  position: absolute;
  top: 10px;
  right: 10px;
`;

export const Styled = {
  Listing,
  Container,
  Day,
  Name,
  SelectedSlot,
  Clear,
  SelectedDay
}