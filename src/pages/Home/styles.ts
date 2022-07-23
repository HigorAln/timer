import styled from 'styled-components';

export const HomeContainer = styled.main`
	flex: 1;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	form {
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 3.5rem;
	}
`;

export const BaseCountdownButton = styled.button`
	width: 100%;
	border: 0;
	padding: 1rem;
	border-radius: 8px;

	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;

	font-weight: bold;
	color: ${props => props.theme['gray-100']};

	cursor: pointer;
	transition: background 0.2s ease;

	&:disabled {
		opacity: 0.7;
		cursor: not-allowed;
	}
`;

export const StartCountdownButton = styled(BaseCountdownButton)`
	background: ${props => props.theme['green-500']};

	&:not(:disabled):hover {
		background: ${props => props.theme['green-700']};
	}
`;

export const StopCountdownButton = styled(BaseCountdownButton)`
	background: ${props => props.theme['red-500']};

	&:not(:disabled):hover {
		background: ${props => props.theme['red-700']};
	}
`;