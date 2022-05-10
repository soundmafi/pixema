import styled from 'styled-components';
import { Colors } from '../../ui/colors';
import { typography } from '../../ui/typography';

export const StyledResetForm = styled.form`
	display: grid;
	row-gap: 32px;
	max-width: 574px;
	width: 100%;
	padding: 40px;
	margin: 0 auto;
	background-color: ${Colors.bgDark};
	border-radius: 10px;
`;

export const StyledTitle = styled.h2`
	${typography.H3}
	margin-bottom: 10px;
	color: ${Colors.ctxWhite};
`;

export const StyledButton = styled.button`
	padding: 16px;
	background-color: ${Colors.primary};
	border-radius: 10px;
	color: ${Colors.ctxWhite};
`;