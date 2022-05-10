import styled from 'styled-components';
import { Colors } from '../../ui/colors';
import { typography } from '../../ui/typography';

export const StyledSignForm = styled.form`
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
	${typography.H2}
	margin-bottom: 10px;
	color: ${Colors.ctxWhite};
`;

export const StyledRestorePasword = styled.a`
	font-size: 14px;
	font-weight: 500;
	line-height: 24px;
	color: ${Colors.secondary};
	cursor: pointer;
	margin-top: -20px;
`;

export const StyledButton = styled.button`
	padding: 16px;
	background-color: ${Colors.primary};
	border-radius: 10px;
	color: ${Colors.ctxWhite};
`;
export const StyledText = styled.p`
	margin: 0 auto;
	${typography.S3};
	color: ${Colors.secondary};
`;

export const StyledTextSignUp = styled(StyledRestorePasword)`
	color: ${Colors.primary};
	${typography.S3};
`;
