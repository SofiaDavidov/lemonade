import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const TextBubble = styled.div`
	animation: ${fadeIn} 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
	flex-shrink: 12;
	padding: ${(props) => {
		return '10px';
	}};
	${(props) =>
		props.sender === 'maya'
			? css`
					background: rgb(230, 230, 230);
					color: black;
			  `
			: css`
					background: rgb(100, 100, 100);
					color: #ffffff;
			  `}
	${(props) =>
		props.bubbleTextType === 'single'
			? css`
					align-self: flex-end;
					border-radius: 20px;
					margin: 10px 5px 10px;
			  `
			: props.bubbleTextType === 'first'
			? css`
					align-self: flex-end;
					border-radius: 20px 20px 20px 5px;
					margin: 10px 5px 0px;
			  `
			: css`
					align-self: flex-end;
					border-radius: 5px 20px 20px 20px;
					margin: 5px 5px 10px;
			  `}
`;

export default TextBubble;
