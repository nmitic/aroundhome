import styled, { css } from 'styled-components';

const Listing = styled.div`
  height: calc(100vh - 165px);
  overflow-y: scroll;
`;

const Container = styled.div`
  text-align: center;
`;

const Name = styled.h1`
  font-size: 1.8rem;
`;

const Day = styled.h3`
  font-size: 1.5rem;
`;

const SelectedDay = styled.h3`
  margin: 0;
  font-size: 1.5rem;
`;

const SelectedSlot = styled.div`
  min-height: 90px;
  border: 1px solid gray;
  margin: 0 5px;
  border-radius: 5px;

  position: relative;
  font-size: 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  ${props => props.selected && css`
    background-color: cyan;
  `}
`;

const Item = styled.div`

`;

const Clear = styled.div`
  color: tomato;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;

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
  Item,
  Clear,
  SelectedDay
}