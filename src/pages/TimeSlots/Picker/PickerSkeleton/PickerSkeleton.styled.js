import styled, {css, keyframes} from "styled-components";

const shineLoadingAnimation = keyframes`
  to {
		background-position: right -40px top 0;
	}
`;

const sharedStyles = css`
  background-color: ${props => props.theme.colors.skeleton};
  border-radius: 5px;
  margin: 20px 10px;

  background-color: ${props => props.theme.colors.skeleton};
  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0));
	background-size: 40px 100%;
	background-repeat: no-repeat;
	background-position: left -40px top 0;
	animation: ${shineLoadingAnimation} 1s ease infinite;
`;

const Name = styled.div`
  min-height: 33px;
  ${sharedStyles}
`;

const SelectedSlot = styled.div`
  min-height: 100px;
  ${sharedStyles}
`;

const Day = styled.div`
  min-height: 52px;
  ${sharedStyles}
`;

const Item = styled.div`
  min-height: 24px;
  ${sharedStyles}
`;

export const Styled = {
  Name,
  SelectedSlot,
  Day,
  Item
}