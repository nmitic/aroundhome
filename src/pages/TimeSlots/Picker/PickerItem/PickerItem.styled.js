import styled, { css } from 'styled-components';

const Item = styled.div`
  cursor: pointer;
  margin-bottom: 1rem;
  border: 1px solid ${props => props.theme.colors.gray};
  max-width: 70%;
  margin-left: auto;
  margin-right: auto;
  padding: 8px;
  border-radius: 5px;

  ${props => props.disabled && css`
    background-color: ${props => props.theme.colors.disabled};;
    cursor: not-allowed;
  `}
`;

const Time = styled.time`
  font-size: ${props => props.theme.fontSizes.h3};
`;

export const Styled = {
  Item,
  Time
}