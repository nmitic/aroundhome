import styled, { css } from 'styled-components';

const Item = styled.div`
  cursor: pointer;
  margin-bottom: 1rem;
  border: 1px solid gray;
  max-width: 70%;
  margin-left: auto;
  margin-right: auto;
  padding: 8px;
  border-radius: 5px;

  ${props => props.disabled && css`
    background-color: beige;
    cursor: not-allowed;
  `}
`;

const Time = styled.time`
  font-size: 1.3rem;
`;

export const Styled = {
  Item,
  Time
}