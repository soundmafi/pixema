import styled from 'styled-components';
import { Colors } from '../../ui/colors';
import { media } from '../../ui/media';
import { typography } from '../../ui/typography';

export const StyledForm = styled.form`
	display: grid;
	row-gap: 40px;
	${media.TABLET} {
		row-gap: 20px;
	}
`;

export const StyledTitle = styled.h2`
	margin-bottom: 16px;

	${typography.H2}
`;

export const StyledContainer = styled.div`
	display: grid;
	column-gap: 40px;
	grid-template-columns: 1fr 1fr;
	@media (max-width: 830px) {
		grid-template-columns: 1fr;
	}

	padding: 40px;
	${media.MOBILE} {
		padding: 20px;
	}

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
	transition: all 0.2s;
	&:hover {
		background-color: #535668;
	}
	&:active {
		background-color: #978fc1;
	}
`;

export const StyledButtonSave = styled(StyledButtonCancel)`
	padding: 12px;

	background-color: ${Colors.PRIMARY};
	border-radius: 10px;
	color: ${Colors.CTX_WHITE};

	transition: 0.3s;

	&:hover {
		background-color: #b5a7ff;
	}

	&:active {
		background-color: #6548ff;
	}
`;

export const StyledButtonsContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 40px;

	width: 50%;
	margin-left: auto;

	${media.MOBILE} {
		margin: 0 auto;
	}
`;

export const StyledThemeName = styled.h3`
	${typography.S2}

	color: ${Colors.CTX_WHITE};
`;

export const StyledText = styled.p`
	${typography.S3}

	color: ${Colors.CTX_LIGHT}
`;
