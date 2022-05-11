import styled from 'styled-components';
import { Colors } from '../../ui/colors';
import { typography } from '../../ui/typography';

export const StyledSignUpForm = styled.form`
	display: grid;
	row-gap: 32px;
	max-width: 574px;
	width: 100%;
	padding: 40px;
	margin: 0 auto;
	background-color: ${Colors.BG_DARK};
	border-radius: 10px;
`;

export const StyledTitle = styled.h2`
	${typography.H2}
	margin-bottom: 10px;
	color: ${Colors.CTX_WHITE};
`;

export const StyledRestorePasword = styled.a`
	font-size: 14px;
	font-weight: 500;
	line-height: 24px;
	color: ${Colors.SECONDARY};
	cursor: pointer;
	margin-top: -20px;
`;

export const StyledButton = styled.button`
	padding: 16px;
	background-color: ${Colors.PRIMARY};
	border-radius: 10px;
	color: ${Colors.CTX_WHITE};
`;
export const StyledText = styled.p`
	margin: 0 auto;
	${typography.S3};
	color: ${Colors.SECONDARY};
`;

export const StyledTextSignUp = styled(StyledRestorePasword)`
	color: ${Colors.PRIMARY};
	${typography.S3};
`;