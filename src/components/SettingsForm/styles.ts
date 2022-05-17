import styled from 'styled-components';
import { Colors } from '../../ui/colors';
import { typography } from '../../ui/typography';

export const StyledForm = styled.form`
	display: grid;
	row-gap: 40px;
`;

export const StyledTitle = styled.h2`
	margin-bottom: 16px;

	${typography.H2}
`;

export const StyledContainer = styled.div`
	display: grid;
	column-gap: 40px;
	grid-template-columns: 1fr 1fr;

	padding: 40px;

	background-color: ${Colors.BG_DARK};
	border-radius: 10px;
`;

export const StyledBlockContainer = styled.div``;

export const StyledPasswordContainer = styled.div`
	display: grid;
	row-gap: 24px;
`;

export const StyledButtonCancel = styled.button`
	padding: 12px;

	background-color: ${Colors.BG_DARK};
	border-radius: 10px;
	color: ${Colors.CTX_WHITE};
`;

export const StyledButtonSave = styled(StyledButtonCancel)`
	padding: 12px;

	background-color: ${Colors.PRIMARY};
	border-radius: 10px;
	color: ${Colors.CTX_WHITE};
`;

export const StyledButtonsContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 40px;

	width: 50%;
	margin-left: auto;
`;

export const StyledThemeName = styled.h3`
	${typography.S2}

	color: ${Colors.CTX_WHITE};
`;

export const StyledText = styled.p`
	${typography.S3}

	color: ${Colors.CTX_LIGHT}
`;
