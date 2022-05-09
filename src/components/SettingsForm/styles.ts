import styled from 'styled-components';
import { Colors } from '../../ui/colors';
import { typography } from '../../ui/typography';

export const StyledForm = styled.form`
	display: grid;
	row-gap: 40px;
`;

export const StyledTitle = styled.h2`
	color: ${Colors.ctxWhite};
	${typography.H2}
	margin-bottom: 16px;
`;

export const StyledContainer = styled.div`
	background-color: ${Colors.bgDark};
	border-radius: 10px;
	padding: 40px;
	display: grid;
	column-gap: 40px;
	grid-template-columns: 1fr 1fr;
`;

export const StyledBlockContainer = styled.div``;

export const StyledPasswordContainer = styled.div`
	display: grid;
	row-gap: 24px;
`;

export const StyledButtonCancel = styled.button`
	padding: 12px;
	background-color: ${Colors.bgDark};
	border-radius: 10px;
	color: ${Colors.ctxWhite};
`;

export const StyledButtonSave = styled(StyledButtonCancel)`
	padding: 12px;
	background-color: ${Colors.primary};
	border-radius: 10px;
	color: ${Colors.ctxWhite};
`;

export const StyledButtonsContainer = styled.div`
	width: 50%;
	margin-left: auto;
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 40px;
`;
