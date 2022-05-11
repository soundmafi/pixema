import styled from 'styled-components';
import { Colors } from '../../ui/colors';

export const StyledInput = styled.input`
	opacity: 0;
	width: 0;
	height: 0;
`;

export const StyledInputLabel = styled.label`
	position: relative;
	display: inline-block;
	width: 60px;
	height: 34px;
	align-self: center;
`;

export const StyledSlider = styled.span<{ state: boolean }>`
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: ${Colors.PRIMARY};
	border-radius: 18px;

	&::before {
		position: absolute;
		content: '';
		height: 26px;
		width: 26px;
		left: 4px;
		bottom: 4px;
		background-color: #ffffff;
		border-radius: 50%;

		transform: ${({ state }) => {
			return state ? `translateX(0)`: `translateX(26px)`;
		}};
		transition: 0.3s;
	}
`;
