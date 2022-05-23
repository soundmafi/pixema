import styled from 'styled-components';
import { Colors } from '../../ui/colors';
import { typography } from '../../ui/typography';

export const StyledResetForm = styled.form`
	z-index: 10;
	display: grid;
	row-gap: 32px;

	max-width: 574px;
	width: 100%;
	padding: 40px;
	margin: 0 auto;

	background-color: ${Colors.BG_DARK};
	border-radius: 10px;

	box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
		rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
		rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const StyledTitle = styled.h2`
	margin-bottom: 10px;

	${typography.H3}

	color: ${Colors.CTX_WHITE};
`;

export const StyledButton = styled.button`
	padding: 16px;

	border-radius: 10px;

	color: ${Colors.CTX_WHITE};
	background-color: ${Colors.PRIMARY};
`;
