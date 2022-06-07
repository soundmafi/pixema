import styled from 'styled-components';
import { Colors } from '../../ui/colors';
import { typography } from '../../ui/typography';

export const StyledSignForm = styled.form`
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

	${typography.H2}

	color: ${Colors.CTX_WHITE};
`;

export const StyledRestorePasword = styled.a`
	margin-top: -20px;

	font-size: 14px;
	font-weight: 500;
	line-height: 24px;

	color: ${Colors.SECONDARY};
	cursor: pointer;
`;

export const StyledButton = styled.button`
	padding: 16px;

	background-color: ${Colors.PRIMARY};
	border-radius: 10px;
	color: ${Colors.CTX_WHITE};
	transition: 0.2s;
	&:hover {
		background-color: var(--bgBtnHover);
	}
	&:active {
		background-color: var(--bgBtnActive);
	}
`;
export const StyledText = styled.p`
	margin: 0 auto;

	${typography.S3};

	color: ${Colors.SECONDARY};
`;

export const StyledTextSignUp = styled(StyledRestorePasword)`
	${typography.S3};

	color: ${Colors.PRIMARY};
`;
