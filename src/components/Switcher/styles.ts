import styled from 'styled-components';
import { Colors } from '../../ui/colors';

export const StyledInput = styled.input`
	width: 0;
	height: 0;

	opacity: 0;
`;

export const StyledInputLabel = styled.label`
	position: relative;

	display: inline-block;

	width: 60px;
	height: 34px;
	align-self: center;
`;

export const StyledSlider = styled.span<{ themeType: string }>`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;

	background-color: ${Colors.PRIMARY};
	border-radius: 18px;

	cursor: pointer;

	&::before {
		position: absolute;
		content: '';
		height: 26px;
		width: 26px;
		left: 4px;
		bottom: 4px;
	
		background-color: #ffffff;
		border-radius: 50%;

		transform: ${({ themeType }) => {
			return (themeType !== 'darkTheme') ? `translateX(0)`: `translateX(26px)`;
		}};
		transition: 0.3s;
	}
`;
